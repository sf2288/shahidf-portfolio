import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { IMAGES_BUCKET_URL } from "../utils/constants";

export default function FourOhFour() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.replace("/");
  };

  return <div className="fourOhFour">
    <img src={`${IMAGES_BUCKET_URL}404.svg`} alt="Payment Success" height={400} width={400}/>
    <h1>Page Not Found</h1>
    <p className="fs-16">The page you're looking for does not seem to exist.</p>
    <Button variant="contained" color="primary" onClick={handleGoToHome}>
      Go to home
    </Button>
  </div>;
}