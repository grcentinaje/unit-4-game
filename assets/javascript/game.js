var yourCounter = 0
        var losses = 0
        var wins = 0
        var crystal1 = Math.floor((Math.random() * 12) + 1);
        var crystal2 = Math.floor((Math.random() * 12) + 1);
        var crystal3 = Math.floor((Math.random() * 12) + 1);
        var crystal4 = Math.floor((Math.random() * 12) + 1);
        var goalScore = Math.floor((Math.random() * 120) + 19);

        function clear() {
            $("#yourCounter").empty();
            yourCounter = 0;
            crystal1 = Math.floor((Math.random() * 12) + 1);
            crystal2 = Math.floor((Math.random() * 12) + 1);
            crystal3 = Math.floor((Math.random() * 12) + 1);
            crystal4 = Math.floor((Math.random() * 12) + 1);
            goalScore = Math.floor((Math.random() * 120) + 19);
            $("#goalScore").text(goalScore);
            return;
        }



        //User Score


        $(document).ready(function () {
            clear()

            $("#crystal1").on("click", function () {
                yourCounter += crystal1; //yourScore = yourScore + Crystal1
                $('#yourCounter').text(yourCounter);

                if (yourCounter > goalScore) {
                    losses++;
                    $("#losses").text(losses);
                    alert("Sorry. Try again!");
                    clear();
                } else {

                    if (yourCounter === goalScore) {
                        wins++;
                        $("#wins").text(wins);
                        alert("Yay! You won!");
                        clear();
                    }
                }
            });

            $("#crystal2").on("click", function () {
                yourCounter += crystal2; //yourScore = yourScore + Crystal1
                $('#yourCounter').text(yourCounter);

                if (yourCounter > goalScore) {
                    losses++;
                    $("#losses").text(losses);
                    alert("Sorry. Try again!");
                    clear();

                } else {

                    if (yourCounter === goalScore) {
                        wins++;
                        $("#wins").text(wins);
                        alert("Yay! You won!");
                        clear();

                    }
                }
            });

            $("#crystal3").on("click", function () {
                yourCounter += crystal3; //yourScore = yourScore + Crystal1
                $('#yourCounter').text(yourCounter);

                if (yourCounter > goalScore) {
                    losses++;
                    $("#losses").text(losses);
                    alert("Sorry. Try again!");
                    clear();

                } else {

                    if (yourCounter === goalScore) {
                        wins++;
                        $("#wins").text(wins);
                        alert("Yay! You won!");
                        clear();
                    }
                }
            });

            $("#crystal4").on("click", function () {
                yourCounter += crystal4; //yourScore = yourScore + Crystal1
                $('#yourCounter').text(yourCounter);

                if (yourCounter > goalScore) {
                    losses++;
                    $("#losses").text(losses);
                    alert("Sorry. Try again!");
                    clear();

                } else {

                    if (yourCounter === goalScore) {
                        wins++;
                        $("#wins").text(wins);
                        alert("Yay! You won!");
                        clear();
                    }
                }
            });

        });