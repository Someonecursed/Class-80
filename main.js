var name_of_students= [];

function submit() 
{
    var display_student_names= [];
    for (g=1; g<=4; g++)
    {
        var name=document.getElementById("name_of_the_student_"+g).value;
        console.log(name);
        name_of_students.push(name);
    }
    console.log(name_of_students);
    var length=name_of_students.length;
    
    for (h=0; h<length;h++)
    {
        display_student_names.push("<h4> NAME - "+name_of_students[h]+"</h4>");
        console.log(display_student_names);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_names;
    var remove_commas=display_student_names.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

  function sorting() {
      name_of_students.sort();
      console.log(name_of_students);
      var display_sorting= [];
      var length =name_of_students.length;
      console.log(length);
      
      for (y=0; y<length; y++)
      {
          display_sorting.push("<h4> NAME - "+name_of_students[y]+"</h4>");
          console.log(display_sorting);
      }
      var remove_commas=display_sorting.join(" ");
      console.log(remove_commas);
      document.getElementById("display_name_without_commas").innerHTML = remove_commas;
      }
  