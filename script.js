// Vote counters
let votes = { Alice: 0, Brian: 0, Carol: 0, David: 0 };

// Voting function
function vote(name) {
    if(votes.hasOwnProperty(name)) {
        votes[name]++;
        updateUI();
    } else {
        alert("Invalid candidate!");
    }
}

// Update UI with bars and counts
function updateUI() {
    let totalVotes = votes.Alice + votes.Brian + votes.Carol + votes.David;
    if(totalVotes === 0) totalVotes = 1; // prevent division by zero

    for (let candidate in votes) {
        document.getElementById(candidate + "-count").innerText = votes[candidate] + " votes";
        let percent = (votes[candidate] / totalVotes) * 100;
        document.getElementById(candidate + "-fill").style.width = percent + "%";
    }
}

// Declare winner
function declareWinner() {
    let maxVotes = 0;
    let winner = [];
    for (let candidate in votes) {
        if(votes[candidate] > maxVotes) {
            maxVotes = votes[candidate];
            winner = [candidate];
        } else if(votes[candidate] === maxVotes && maxVotes > 0) {
            winner.push(candidate);
        }
    }

    if(maxVotes === 0) {
        alert("No votes have been cast yet!");
    } else if(winner.length === 1) {
        alert("Winner: " + winner[0] + " with " + maxVotes + " votes!");
    } else {
        alert("It's a tie between: " + winner.join(", ") + " with " + maxVotes + " votes each!");
    }
}