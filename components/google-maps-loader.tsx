"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    initGoogleMaps: () => void;
  }
}

export function GoogleMapsLoader() {
  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error(
        "Google Maps API key not found. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables."
      );
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;

    // Set up callback function
    window.initGoogleMaps = () => {
      console.log("Google Maps API loaded successfully");
    };

    // Handle script load errors
    script.onerror = () => {
      console.error("Failed to load Google Maps API");
    };

    // Append script to document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
      if (window.initGoogleMaps) {
        delete window.initGoogleMaps;
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}
