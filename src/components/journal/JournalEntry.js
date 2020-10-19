import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un Nuevo Diea
        </p>
        <p className="journal__entry-content">
          skdfjaslfaklsjdfkjfas
          dfasd
          fas
          dfasdfasdfasdfkahsld
        </p>

      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
