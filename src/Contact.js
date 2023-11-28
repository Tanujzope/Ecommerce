import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact Page</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29795.16099453985!2d75.88049466301301!3d21.016870421274394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9bb2c9cf6e999%3A0x44f548d22ef11ed6!2sVarangaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699968960369!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/meqbwago" method="POST" className="contact-inputs">
              <input type="text" placeholder="Username" name="username" required autoComplete="off"/>
              <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
              <textarea autoComplete="off" name="Message" placeholder="Enter Your Name" id="" cols="30" rows="10" required></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
