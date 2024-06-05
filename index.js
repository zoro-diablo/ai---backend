const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GST calculation endpoint
app.get('/calculate-gst', (req, res) => {
  // Assuming the GST rate is 18%
  const gstRate = 18;
  
  // Parse amount from query parameter
  const amount = parseFloat(req.query.amount);
  
  if (isNaN(amount)) {
    return res.status(400).json({ error: 'Invalid amount provided' });
  }
  
  // Calculate GST
  const gstAmount = (amount * gstRate) / 100;
  const totalAmount = amount + gstAmount;

  // Send response
  res.json({
    amount: amount,
    gstAmount: gstAmount,
    totalAmount: totalAmount
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
