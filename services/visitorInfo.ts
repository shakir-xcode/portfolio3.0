type Brand = {
  [k: string]: string;
};

interface VisitorInfo {
  userType: string;
  timestamp: Date;
  localTime: string;
  userAgent: string;

  device_screenWidth: string;
  device_screenHeight: string;
  device_colorDepth: string;
  device_pixelRatio: string;
  device_touchSupport: boolean;
  device_deviceMemory: string;
  device_hardwareConcurrency: string;

  brands: Brand[] | string;
  ip: string;
  location_error: string | null;
  location_city: string;
  location_region: string;
  location_country: string;
  location_countryCode: string;
  location_postalCode: string;
  location_latitude: string;
  location_longitude: string;
  location_timezone: string;
  location_isp: string;
}

export async function collectVisitorInfo() {
  const info: VisitorInfo = {
    userType: "site visitor",
    timestamp: new Date(),
    localTime: new Date().toString(),
    userAgent: navigator?.userAgent || "unknown",
    device_screenWidth: window?.screen?.width.toString() || "unknown",
    device_screenHeight: window?.screen?.height.toString() || "unknown",
    device_colorDepth: window?.screen?.colorDepth?.toString() || "unknown",
    device_pixelRatio: window?.devicePixelRatio.toString() || "unknown",
    device_touchSupport:
      "ontouchstart" in window || navigator?.maxTouchPoints > 0,
    // @ts-ignore
    device_deviceMemory: navigator?.deviceMemory?.toString() || "unknown",
    device_hardwareConcurrency:
      navigator?.hardwareConcurrency.toString() || "unknown",

    // @ts-ignore
    brands: JSON.stringify(navigator?.userAgentData?.brands) || "unknown",
    ip: "unknown",
    location_error: "",
    location_city: "unknown",
    location_region: "unknown",
    location_country: "unknown",
    location_countryCode: "unknown",
    location_postalCode: "unknown",
    location_latitude: "unknown",
    location_longitude: "unknown",
    location_timezone: "unknown",
    location_isp: "unknown",
  };

  // Try to get more detailed location info from IP
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    info.ip = ipData?.ip || "unknown";

    // Get approximate location from IP (free service)
    const locationResponse = await fetch(`https://ipapi.co/${info.ip}/json/`);
    const locationData = await locationResponse.json();

    info.location_error = null;
    info.location_city = locationData?.city || "unknown";
    info.location_region = locationData?.region || "unknown";
    info.location_country = locationData?.country_name || "unknown";
    info.location_countryCode = locationData?.country_code || "unknown";
    info.location_postalCode = locationData?.postal || "unknown";
    info.location_latitude = locationData?.latitude || "unknown";
    info.location_longitude = locationData?.longitude || "unknown";
    info.location_timezone = locationData?.timezone || "unknown";
    info.location_isp = locationData?.org || "unknown";
  } catch (error) {
    info.location_error = "Could not determine location";
  }

  return info;
}
