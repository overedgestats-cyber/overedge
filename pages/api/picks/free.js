export default function handler(req, res) {
  res.status(200).json({
    date: new Date().toISOString().split('T')[0],
    picks: [
      { match: "Team A vs Team B", prediction: "Over 2.5", probability: 0.83 },
      { match: "Team C vs Team D", prediction: "Under 2.5", probability: 0.82 }
    ]
  });
}