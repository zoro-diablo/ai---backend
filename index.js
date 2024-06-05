const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GST calculation endpoint
app.post('/calculate-gst', (req, res) => {
  // Assuming the GST rate is 18%
  const gstRate = 18;
  
  const { amount } = req.body;

  if (amount === undefined || isNaN(amount)) {
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

// TDS calculation endpoint
app.post('/calculate-tds', (req, res) => {
  // Assuming the TDS rate is 10%
  const tdsRate = 10;
  
  const { income } = req.body;

  if (income === undefined || isNaN(income)) {
    return res.status(400).json({ error: 'Invalid income provided' });
  }
  
  // Calculate TDS
  const tdsAmount = (income * tdsRate) / 100;

  // Send response
  res.json({
    income: income,
    tdsAmount: tdsAmount
  });
});

// Income tax calculation endpoint
app.post('/calculate-income-tax', (req, res) => {
  // Assuming the income tax rate is 20%
  const incomeTaxRate = 20;
  
  const { income } = req.body;

  if (income === undefined || isNaN(income)) {
    return res.status(400).json({ error: 'Invalid income provided' });
  }
  
  // Calculate income tax
  const incomeTaxAmount = (income * incomeTaxRate) / 100;

  // Send response
  res.json({
    income: income,
    incomeTaxAmount: incomeTaxAmount
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
