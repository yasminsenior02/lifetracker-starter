import "./Activity.css";

export default function Activity() {
  return (
    <div className="ActivityPage">
      <div className="content">
        <div className="actions">
          <h2 className="head">Activity Feed</h2>
          <div className="buttons">
            <a href="/exerciseform">
              <button className="Buttonoutlinegold ">Add Exercise</button>
            </a>
            <a href="/sleepform">
              <button className="Buttonoutlineblue ">Log Sleep</button>
            </a>
            <a href="/nutritform">
              <button className="Buttonoutlineaqua ">Record Nutrition</button>
            </a>
          </div>
        </div>
        <div className="stats">
          <div className="main">
            <div className="SummaryStatgold">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStatpurple">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStataqua">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div className="more">
            <div className="SummaryStatteal">
              <div className="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStatorange">
              <div className="background">
                <p>Avg Exercise Intensity</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStatred">
              <div className="background">
                <p>Total Hours Slept</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
