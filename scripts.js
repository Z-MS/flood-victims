window.onload = () => {
    let currentDate = new Date();
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      };

    document.getElementById("last-updated").textContent = new Intl.DateTimeFormat("en-GB", options).format(currentDate);
}