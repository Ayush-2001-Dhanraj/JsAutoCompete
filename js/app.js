function billingFunction() {
  const check = document.getElementById("same").checked;
  //   console.log(check);
  if (check) {
    document.getElementById("billingName").value = document.getElementById(
      "shippingName"
    ).value;
    document.getElementById("billingZip").value = document.getElementById(
      "shippingZip"
    ).value;
  } else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}
