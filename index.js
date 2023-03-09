function dateString(timestamp, method) {
  const stringMethods = [
    "dateString",
    "timeString",
    "localeString",
    "GMT",
    "ISO",
  ];

  if (!stringMethods.includes(method))
    return {
      success: false,
      error:
        "Please include one of the following as the second parameter: dateString, timeString, localeString, GMT, ISO",
    };

  if (method === "dateString") return timestamp.toString();
  else if (method === "timeString") return timestamp.toTimeString();
  else if (method === "localeString") return timestamp.toLocaleString();
  else if (method === "GMT") return timestamp.toGMTString();
  else if (method === "ISO") return timestamp.toISOString();
  else return timestamp + " could not be converted to string";
}

module.exports = dateString;
