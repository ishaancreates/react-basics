
function Student(props) {
    return (
        <div className="Student">
            <p> Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.defaultProps = {
    name: "Guest",
    age: 0 ,
    isStudent: false

}
export default Student

/*

  <Student name="Ishaan" age={21} isStudent={true}/>
  <Student name="Rohan" age={23} isStudent={true}/>
  <Student name="Bismah" age={26} isStudent={false}/>
  <Student name="Sania" age={19} isStudent={true}/>
  <Student/>
  
  */