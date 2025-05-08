
function isClose(value, target, tolerance = 20) {
  return Math.abs(value - target) <= tolerance;
}
function classifyRGB(rgb) {
  if (isClose(rgb.r, 180) && isClose(rgb.g, 150) && isClose(rgb.b, 80)) {
    return "Sangat Layak Dikonsumsi";
  } else if (isClose(rgb.r, 100) && isClose(rgb.g, 120) && isClose(rgb.b, 60)) {
    return "Masih Layak Dikonsumsi";
  } else if (isClose(rgb.r, 80) && isClose(rgb.g, 80) && isClose(rgb.b, 100)) {
    return "Kurang Layak Dikonsumsi";
  } else {
    return "Tidak Dikenali";
  }
}
function classifyByPHAndRGB(pH, rgb) {
  let status;
  if (pH < 5.5) {
    status = "Sangat Layak Dikonsumsi";
  } else if (pH >= 5.5 && pH < 6.0) {
    status = "Layak Dikonsumsi";
  } else if (pH >= 6.0 && pH < 6.5) {
    status = "Masih Layak Dikonsumsi";
  } else if (pH >= 6.5 && pH <= 7.0) {
    status = "Kurang Layak Dikonsumsi";
  } else {
    status = "Tidak Layak Dikonsumsi";
  }
  const rgbStatus = classifyRGB(rgb);
  if (status === "Sangat Layak Dikonsumsi" && rgbStatus !== "Sangat Layak Dikonsumsi") {
    status = "Masih Layak Dikonsumsi";
  }
  return status;
}
