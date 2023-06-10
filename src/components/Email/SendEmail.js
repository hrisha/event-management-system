// import React, { useEffect } from 'react';
// import sgMail from '@sendgrid/mail';

// const  SendEmail = () => {
//   useEffect(() => {
//     const sendEmail = async () => {
//       sgMail.setApiKey('{USE_YOUR_KEY}');

//       const msg = {
//         to: '{EMAIL}',
//         from: '{EMAIL}',
//         subject: 'Hello from your React app',
//         text: 'This is the email content.',
//       };

//       try {
//         await sgMail.send(msg);
//         console.log('Email sent successfully');
//       } catch (error) {
//         console.error('Error sending email:', error);
//       }
//     };

//     sendEmail();
//   }, []);

//   return <div></div>;
// };

// export default SendEmail;
