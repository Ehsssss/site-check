import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <Features />
      <iframe
        className="w-full aspect-video self-stretch md:min-h-96"
        src="https://www.youtube.com/embed/1FLYZdxsteo"
        frameBorder="0"
        title="Product Overview Video"
        aria-hidden="true"
      />
    </>
  );
}

//##############################################
// "use client";

// import React, { useState } from "react";

// const AboutUsPage: React.FC = () => {
//   // State to track whether the email is submitted
//   const [email, setEmail] = useState<string>("");
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Email validation function
//   const validateEmail = (email: string) => {
//     const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     return regex.test(email);
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     // Clear error message if valid
//     setErrorMessage("");

//     // Set the submission state to true to display the video
//     setIsSubmitted(true);
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>About Us</h1>

//       {/* If email is not submitted, show form */}
//       {!isSubmitted ? (
//         <div style={styles.formContainer}>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email" style={styles.label}>
//               Please enter your email to watch the video:
//             </label>
//             <br />
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <br />
//             {errorMessage && <p style={styles.error}>{errorMessage}</p>}
//             <button type="submit" style={styles.button}>
//               Submit
//             </button>
//           </form>
//         </div>
//       ) : (
//         // Show YouTube video after email is submitted
//         <div style={styles.videoContainer}>
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/1FLYZdxsteo"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={styles.video}
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     textAlign: "center",
//     padding: "40px",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: "30px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     display: "inline-block",
//   },
//   label: {
//     fontSize: "1.2rem",
//     color: "#333",
//     marginBottom: "10px",
//     display: "block",
//   },
//   input: {
//     width: "300px",
//     padding: "10px",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     marginTop: "10px",
//     marginBottom: "20px",
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     color: "#fff",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   buttonHover: {
//     backgroundColor: "#0056b3",
//   },
//   error: {
//     color: "red",
//     marginBottom: "10px",
//   },
//   videoContainer: {
//     marginTop: "20px",
//   },
//   video: {
//     borderRadius: "8px",
//     boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
//   },
// };

// export default AboutUsPage;

//############################################
