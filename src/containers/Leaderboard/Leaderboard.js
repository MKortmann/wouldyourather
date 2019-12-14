import React from "react";
import Table from "../../components/Table";
import StyledLink from "../../components/StyledLink";



function Leaderboard(props) {

  const head = {
    avatar: "Avatar",
    user: "User",
    posted: "Posted Questions",
    answered: "Answered Questions",
    points: "Total Points"
  }



  return (
    <div>
      <h1>Leaderboard</h1>
      <Table head={head} questions={props.questions} users={props.users} user={props.user}/>
      <br/>
      <StyledLink to={"/questions"} label={"Back"} ></StyledLink>
    </div>
  )
}

export default Leaderboard;
