import emailjs from 'emailjs-com';

// Define minimal types for result and error since emailjs-com does not export them
type EmailJSResult = { text: string };
type EmailJSError = { text: string };

// Call this function from your form's onSubmit handler
const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_iglw8c6',      // e.g. 'service_abc123'
      'template_w5aaq3n',     // e.g. 'template_xyz456'
      e.currentTarget,
      'Vk377MJrhxyaQ-AQ7'     // e.g. 'abc123XYZ456'
    )
    .then(
      (result: EmailJSResult) => {
        console.log('Email sent:', result.text);
      },
      (error: EmailJSError) => {
        console.error('Email send error:', error.text);
      }
    );
};

export default sendEmail;
// import emailjs from 'emailjs-com';

// // Call this function from your form's onSubmit handler
// const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       'service_iglw8c6',      // e.g. 'service_abc123'
//       'template_w5aaq3n',     // e.g. 'template_xyz456'
//       e.currentTarget,
//       'Vk377MJrhxyaQ-AQ7'       // e.g. 'abc123XYZ456'
//     )
//     .then(
//       (result: EmailJSResponseStatus) => {
//       console.log('Email sent:', result.text);
//       },
//       (error: EmailJSError) => {
//         console.error('Email send error:', error.text);
//       }
//     );
// };

// export default sendEmail;