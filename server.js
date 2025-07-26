const xpress = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const app = express();

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
})

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB

mongoose.connect(process.env.ATLAS_URI, process.env.API_KEY, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.error(err));

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentRouter)

app,listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}');
});