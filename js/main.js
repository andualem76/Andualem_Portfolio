const collapsibles = document.querySelectorAll(".menu_btn");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
      var element = document.getElementById("myDIV");
      element.classList.toggle("active");
  })
);

const dismiss = document.querySelectorAll(".dismiss");
dismiss.forEach((item) =>
  item.addEventListener("click", function () {
      var element = document.getElementById("myDIV");
      element.classList.remove("active");

  })
);

  const event11 = window.addEventListener('scroll', function(e) {
    if(this.scrollY < 200) {
        var element = document.getElementById("navv");
        element.classList.remove("sticky");
    } else {
        var element = document.getElementById("navv");
        element.classList.add("sticky");
    }
  });

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

      // Draw the chart and set the chart values
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Task", "Skills"],
          ["HTML", 8],
          ["Css", 6],
          ["Php", 4],
          ["JavaScript", 4],
          ["MySql", 6],
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { width: 650, height: 400 };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(
          document.getElementById("piechart")
        );
        chart.draw(data, options);
      }