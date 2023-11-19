<?php
    header("Content-Type: application/json");
    $workExperience = array(
        '0' => array('title' => "Teleperformance",
                     'duration' => " Oct 2020 - April 2022",
                     'description' => ["Worked as a Support Executive in different departments for Flipkart.","Was responsible for overall concerns of the customers related to their products and account profile. 
                     ", "Always achieved the desired targets in each department."]),
        '1' => array('title' => "Merkur Gaming India",
                      'duration' => " May 2022 - Present",
                      'description' => ["Designing, building and maintaining Java based web applications.","Contributing and taking part software development and architectural development activities.","Troubleshooting and resolving the reported issues and replying to queries in a timely manner.","Designing detailed domain documents for the team.","Improving the code quality by implementing best practices.","Recommending changes to improve established java application processes."]
                    ));
    $projectList = array(
      "0" => array(
          'projectTitle' => "Customer Management System",
          'projectDescription' => "A standalone customer management
           desktop application. It was designed to work collaboratively with
           e-commerce applications. It has basic features like a status
           check, delivery status, customer concerns etc.",
           'projectTechStack' => "Java, Mysql"),
      "1" => array(
          'projectTitle' => "University Management System",
          'projectDescription' => " A university management web application by
          which the university admins can manage their application available at the students. It helps the students by providing an online platform for availing the services provided by the university. For example:- term end results publishing,
          ,assignment results publishing, notifications releasing, student centre allotments etc.",
           'projectTechStack' => "Php, Mysql, Javascript, Bootstrap"),
      "2" => array(
          'projectTitle' => "IGNOU : An Official application",
           'projectDescription' => "A student management android application which contains some necessary options which are related to the university services. For example:-Student profile, Term-end result, Grade card etc.",
           'projectTechStack' => "Java, Mysql"),
      "3" => array(
           'projectTitle' => "Messenger",
           'projectDescription' => "It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc.
           For example:- comments, likes count, share count etc.",
           'projectTechStack' => "Mysql, Hibernate, Spring, JAX-RS"),
      "4" => array(
           'projectTitle' => "Keep clone",
           'projectDescription' => "It is a web application which is the clone of Google keep. It can save the note, delete the note, edit the note and view the note.",
           'projectTechStack' => "Mysql, Hibernate, Spring, JSP"),
      "5" => array(
           'projectTitle' => "Movie catalog",
           'projectDescription' => "It contains restful apis for movie catelog web application which provide detailed information for the movies for example movie ratings, cast, budget etc.",
           'projectTechStack' => "Mysql, Hibernate, Spring, JSP"),
      );
        $mainResult = array('worKExperience'=> $workExperience,
                            'projectList'=> $projectList);
        echo json_encode($mainResult);
?>