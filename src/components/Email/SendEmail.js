// import React, { useEffect } from 'react';
// import sgMail from '@sendgrid/mail';

// const SendEmail = () => {
//   useEffect(() => {
//     const sendEmail = async () => {
//       sgMail.setApiKey('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');

//       const msg = {
//         to: 'hakam.risha@gmail.com',
//         from: 'hakam.risha@gmail.com',
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
