import React, { useEffect } from "react";
import MeetupReminderButton from "@site/src/components/MeetupReminderButton";

// Default implementation, that you can customize
export default function Root({ children }) {
  useEffect(() => {
    // Minimal MutationObserver to fix any black text in search dropdown that CSS might miss
    const observer = new MutationObserver(() => {
      const darkTheme = document.documentElement.getAttribute("data-theme") === "dark";
      if (darkTheme) {
        const searchDropdowns = document.querySelectorAll(
          '.searchBar .dropdownMenu, .DocSearch-Modal, .DocSearch-Container'
        );
        searchDropdowns.forEach((dropdown) => {
          const allElements = dropdown.querySelectorAll("*");
          allElements.forEach((el) => {
            if (el instanceof HTMLElement) {
              const computedStyle = window.getComputedStyle(el);
              // Only fix pure black text that CSS might have missed
              if (computedStyle.color === "rgb(0, 0, 0)" || computedStyle.color === "rgba(0, 0, 0, 1)") {
                el.style.setProperty("color", "rgba(255, 255, 255, 0.85)", "important");
              }
            }
          });
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {children}
      <MeetupReminderButton />
    </>
  );
}
