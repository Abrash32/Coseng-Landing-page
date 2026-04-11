"use client";
import classes from "./registerComponent.module.css";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import {
  TextField,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import CtaButton from "../buttons/ctabuttonlink";
import { GrStatusGood } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { submitProgramEnrollForm } from "@/lib/submissionForms/submitProgramEnrollForm";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function RegisterComponent({
  cta,
  programID,
  programCategory,
  programServiceName,
  caption,
  programTitle,
  programDescription,
  programDuration,
  programPrice,
  collection,
  closeModal,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    country: "",
    message: "",
    consent: "",
    type: cta?.split(" ")[0],
    programID: programID,
    program: programTitle,
    category: programCategory,
    service: programServiceName,
    price: programPrice,
    description: programDescription,
    duration: programDuration,
    collection: collection,
    isPaid: false,
  });
  // const [formState, formAction] = useFormState(submitProgramEnrollForm, {
  //   message: null,
  // });
  const [state, setState] = useState({
    message: null,
    status: "",
    loading: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState({
    status: "",
    program: "",
    category: "",
  });
  const [checkout, setCheckout] = useState(false);
  const [openCheckoutDailog, setOpenCheckoutDailog] = useState(false);
  const orderURL = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
  useEffect(() => {
    let status = searchParams.get("paymentstatus");
    const category = searchParams.get("category");
    const program = searchParams.get("program");
    setPaymentStatus((prevState) => {
      return {
        ...prevState,
        status: status,
        program: program,
        category: category,
      };
    });
  }, [searchParams]);
  useEffect(() => {
    // Code to open the dialog for a payment gateway (e.g: ANNA)
    if (checkout) {
      setOpenCheckoutDailog(true);
    } else {
      setOpenCheckoutDailog(false);
    }
  }, [checkout]);
  useEffect(() => {
    if (state.status === "successful") {
      setErrorMessage(state.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        program: "",
        message: "",
        address: "",
        country: "",
        consent: "",
      });
    } else {
      setErrorMessage(state.message);
    }
  }, [state, state.status, state.message]);
  useEffect(() => {
    if (paymentStatus === "success") {
      enrollFunction();
    } else {
      return;
    }
  }, [paymentStatus]);
  const handleChange = (e) => {
    const { name, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : e.target.value,
    });
  };
  function acceptConfirmation() {
    setErrorMessage("");
    if (state.status === "successful" || paymentStatus.status === "success") {
      setPaymentStatus("");
      setErrorMessage("");
      // router.push("/");
    }
    return;
  }
  async function enrollFunction(event) {
    event.preventDefault();
    setState((prevState) => {
      return { ...prevState, loading: true };
    });
    const result = await submitProgramEnrollForm(state, formData);
    setState((prevState) => {
      return { message: result.message, status: result.status, loading: false };
    });
  }

  // a function that processes user checkout to be successful
  async function checkoutFunction(event) {
    event.preventDefault();
    const result = await redirectToCheckout();
  }
  // To direct user to checkout Payment system
  async function redirectToCheckout(event) {
    let price = parseInt(programPrice.split("£")[1]);
    try {
      setState((prevState) => {
        return { ...prevState, loading: true };
      });
      const response = await fetch(`${baseURL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programDetails: {
            programTitle: `${programTitle} - ${programServiceName}`,
            programID,
            programDescription,
            programPrice: price,
          },
          orderURL,
          userData: formData,
        }),
      });

      const data = await response.json();
      // console.log(data);
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
        setState((prevState) => {
          return { ...prevState, loading: false };
        });
      } else {
        return;
      }
    } catch (error) {
      // console.error("Error processing payment:", error);
    }
  }

  return (
    <>
      {(errorMessage?.split("").length > 0 || paymentStatus.status) && (
        <dialog className="dialog">
          <div
            className="alertBox "
            style={{
              maxWidth: "600px",
              display: "flex",
              margin: "0 1rem",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {state?.status === "successful" ||
              paymentStatus.status === "success" ? (
                <h1 style={{ color: "green" }}>
                  <GrStatusGood />
                </h1>
              ) : (
                <h1 style={{ color: "red" }}>
                  <RiErrorWarningLine />
                </h1>
              )}
              <h3
                style={{
                  color:
                    state?.status === "successful" ||
                    paymentStatus.status === "success"
                      ? "green"
                      : "red",
                }}
              >
                {state?.status === "successful" ||
                paymentStatus.status === "success"
                  ? "Confirmation!!"
                  : "An Error Occured"}
              </h3>
              {state.status && <p>{errorMessage}</p>}
              {paymentStatus.status === "success" && (
                <p>
                  {paymentStatus?.category === "service" &&
                    "Thank for your submission. A member of our team will be in touch with the next steps."}
                  {paymentStatus?.category === "training" &&
                    `You have successfully enrolled for our ${paymentStatus?.program}. An email has been sent to you to confirm your enrollment.  A member of our team will be in touch with the next steps`}
                </p>
              )}
              {paymentStatus?.status === "failed" && (
                <p>
                  Sorry!! There was an error processing payment at checkout. Try
                  again
                </p>
              )}
            </div>
            <div style={{ marginLeft: "auto" }}>
              <CtaButton
                design="flat"
                action={acceptConfirmation}
                type="button"
              >
                Ok
              </CtaButton>
            </div>
          </div>
        </dialog>
      )}
      <section className={classes.contactForm}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            margin: "0 auto",
            pb: 8,
          }}
        >
          <section className={classes.formInnerSection}>
            <div className={classes.formFileds}>
              <h2>Register</h2>

              <Grid item xs={12} md={2}>
                <form>
                  <div>
                    <TextField
                      label="Full Name"
                      name="name"
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Phone Number (optional)"
                      name="phone"
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      margin="normal"
                    />
                    <TextField
                      label="Email Address"
                      name="email"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Company Name (optional)"
                      name="company"
                      fullWidth
                      value={formData.company}
                      onChange={handleChange}
                      margin="normal"
                    />

                    {/* Drop-down for selecting a service */}
                    <div
                      contentEditable={false}
                      suppressContentEditableWarning={true}
                    >
                      <TextField
                        label="Chosen Program Category"
                        name="program"
                        fullWidth
                        value={programTitle}
                        onChange={handleChange}
                        margin="normal"
                        // focused
                      />
                    </div>
                    <TextField
                      label="Address"
                      name="address"
                      fullWidth
                      value={formData.address}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Country"
                      name="country"
                      fullWidth
                      value={formData.country}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />

                    {/* Message Text Area */}
                    <TextField
                      label="Additional Information (optional)"
                      name="message"
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                    />
                    {/* This is a hidden Input section */}
                    <TextField
                      label="Chosen Service Category"
                      name="service"
                      fullWidth
                      value={programServiceName}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Collection"
                      name="collection"
                      fullWidth
                      value={collection}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Category"
                      name="category"
                      fullWidth
                      value={programCategory}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Duration"
                      name="duration"
                      fullWidth
                      value={programDuration}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Description"
                      name="description"
                      fullWidth
                      value={programDescription}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Price"
                      name="price"
                      fullWidth
                      value={programPrice}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    <TextField
                      label="Type"
                      name="type"
                      fullWidth
                      value={cta?.split(" ")[0]}
                      onChange={handleChange}
                      margin="normal"
                      sx={{ display: "none" }}
                    />
                    {/* Hidden input section ends here */}

                    {/* Hidden input section ends here */}
                  </div>
                  <div className="consentSection">
                    <input
                      type="checkbox"
                      value={formData.consent}
                      onChange={handleChange}
                      name="consent"
                      id="consent"
                    />
                    <label htmlFor="consent" style={{ cursor: "pointer" }}>
                      <p>
                        By submitting this form, you agree to our{" "}
                        <Link
                          href="/terms-of-use"
                          style={{ textDecoration: "underline" }}
                        >
                          Policies and Terms of Use
                        </Link>
                        .
                      </p>
                    </label>
                  </div>
                  <div style={{ margin: "1rem 0" }}>
                    {cta != "Order Now" && (
                      <CtaButton
                        design="raised"
                        type="button"
                        width="100%"
                        disabled={!formData.consent}
                        loading="Please wait..."
                        action={
                          cta === "Request Pricing"
                            ? enrollFunction
                            : checkoutFunction
                        }
                      >
                        {state.loading
                          ? "Please wait..."
                          : `${
                              programCategory === "training"
                                ? "Continue to Checkout"
                                : cta
                            }`}
                      </CtaButton>
                    )}
                    {cta === "Order Now" && (
                      <CtaButton
                        design="raised"
                        type="button"
                        width="100%"
                        disabled={!formData.consent}
                        loading="Redirecting to checkout..."
                        action={checkoutFunction}
                      >
                        {state.loading
                          ? "Redirecting to checkout..."
                          : "Continue to Checkout"}
                      </CtaButton>
                    )}
                    {cta != "Request Pricing" &&
                      programCategory === "training" && (
                        <>
                          <p style={{ textAlign: "center" }}>or</p>
                          <CtaButton
                            design="plain"
                            type="button"
                            width="100%"
                            disabled={!formData.consent}
                            loading="Please wait..."
                            action={enrollFunction}
                          >
                            {state.loading
                              ? "Please wait..."
                              : "Enroll Now - Pay Later"}
                          </CtaButton>
                        </>
                      )}
                  </div>
                </form>
                {state?.message?.split("").length > 0 &&
                  state?.status === "failed" && (
                    <p
                      style={{
                        padding: "0.5rem 1rem",
                        marginBottom: "1rem",
                        backgroundColor: `${
                          state?.status === "failed" ? "#f2b5d4" : "#b7e4c7"
                        }`,
                        borderRadius: "0.5rem",
                        textAlign: "center",
                        border: "0.5px solid #grey",
                      }}
                    >
                      {state.message}
                    </p>
                  )}
              </Grid>
            </div>
          </section>

          {/* Social Media Links */}
        </Box>
      </section>
    </>
  );
}
