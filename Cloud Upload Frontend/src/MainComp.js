import React, { useState } from "react";
import "./style.css";
import cloud from "./images/cloud.png";
import covernew from "./images/covernew.png";
import { imageUpload, videoUpload, reducedImageUpload } from "./api";

const MainComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = async () => {
    try {
      const formDataa = new FormData();
      Object.keys(formDataa).forEach((key) => {
        if (key !== "imageFile") {
          formDataa.append(key, document.getElementById(key).value);
        }
      });
      const imageFile = document.getElementById("imageFile").files[0];
      formDataa.append("imageFile", imageFile);
      const response = await fetch("/api/imageUpload", {
        method: "POST",
        body: formDataa,
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Handle successful response
      } else {
        console.log(response.error());
        // Handle error response
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
      <section id="title" className="gradient-background">
        <div className="container col-xxl-8 px-4 pt-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={covernew}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                height="200"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Upload Images and Videos.
                <br />
                Free Up Space. <br />
                Completely Free.
                <br /> No Sign in Required!
              </h1>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-light btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://github.com"
                    aria-label="Homepage"
                    className="footer-octicon"
                    title="GitHub"
                    id="github"
                  >
                    <svg
                      aria-hidden="true"
                      className="octicon octicon-mark-github"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    Source Code
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  <a href="#form" id="second">
                    {" "}
                    Start Uploading
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cloudinary">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">How we Work!</h1>
          <br />
          <br />
          <div className="col-lg-6 mx-auto">
            <div style={{ maxHeight: "30vh" }}>
              <div className="container px-5">
                <img
                  src={cloud}
                  className="img-fluid border rounded-3 shadow-lg mb-4"
                  alt="Example image"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="lead mb-4">
              We provide cloud service hosting by deploying applications and
              data on remote servers, ensuring accessibility and scalability for
              users worldwide. Through virtualization and resource allocation,
              We optimize performance and offer seamless management of computing
              resources.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
              >
                <a href="https://cloudinary.com" id="visitcloud">
                  {" "}
                  Visit Cloudinary
                </a>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <a href="#form" id="uploading">
                  {" "}
                  Start Uploading{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div id="form">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold text-body-emphasis">Upload Files</h1>
          <div className="col-lg-6 mx-auto">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputAddress" className="form-label">
                  Tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Tags"
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6">
                <label for="inputState" className="form-label">
                  Action
                </label>
                <select id="inputState" className="form-select">
                  <option selected disabled>
                    Choose Operation
                  </option>
                  <option>Upload Image to Cloud</option>
                  <option>Upload Video to Cloud</option>
                  <option>Upload Reduced Image to Cloud</option>
                </select>
              </div>
              <label className="form-label" for="customFile">
                Upload File
              </label>
              <input
                type="file"
                className="form-control"
                id="customFile"
                onChange={handleInputChange}
              />
              <div className="col-12"></div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
                {/* </div> */}
              </div>
              {/* </div> */}
            </form>
          </div>
          <div id="footer">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 ">
                <div className="col mb-3">
                  <a
                    href="https://github.com/ujjwalrajexe"
                    className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                  >
                    <svg
                      aria-hidden="true"
                      className="octicon octicon-mark-github"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>{" "}
                  </a>
                  <span className="mb-3 mb-md-0 text-body-secondary">
                    {" "}
                    Ujjwal Raj
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
