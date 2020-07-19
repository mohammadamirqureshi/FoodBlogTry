// const base_url="https://api.railwayapi.com/v2/";
const APIKEY = "e7ba28088adb4dcbac789246fe40b410";



$('button').click(() => {
    
    const x = $('#search').val();
        $.ajax({
            url: "https://api.spoonacular.com/recipes/search?information&apiKey=" + APIKEY + "&query="+ x + "&number=5",

            success: function(data) {
                console.log(data);
              
                
            }
        })
    
});



// $('button').click(() => {
    
//     const x = $('#search').val();
//         $.ajax({url:base_url +"code-to-name/code/"+ x + "/"+ APIKEY+ "/myapikey/" , success: function(result){



//             console.log(result);
            
//         }
//     });

// });












// // Authenticate
// $ilovepdf = new Ilovepdf('project_public_92948694b5124f4cecbaaf3c0d74e24a_KvFdX6e4a4b600719bb06d8300ef36865314f ', 'secret_key_91e39c7eb384109bf8a70adabcbd5d53_wbHUT196d2be7aad87ada77d0dc58cd0f7d12');

// // Choose your processing tool and create a new task
// $myTaskCompress = $ilovepdf->newTask('compress');

// // Add files to task for upload
// $file1 = $myTaskCompress->addFile('path/to/file1_name.pdf');
// $file2 = $myTaskCompress->addFile('path/to/file2_name.pdf');
// $file3 = $myTaskCompress->addFile('path/to/file3_name.pdf');

// // Execute the task
// $myTaskCompress->execute();

// // Download the packaged files
// $myTaskCompress->download();





//------------------------------------------------------------------------------------------------------------------------------------------------------
// const base_url="https://api.themoviedb.org/3/";
// const APIKEY = "f6642a9e75698dbd0dfd566716c561f2";
// const image_url="https://image.tmdb.org/t/p/w500";
// const test = "https://api.themoviedb.org/3/multi/550?api_key=f6642a9e75698dbd0dfd566716c561f2&callback=test";

// $('button').click(() => {
//     const x = $('#search').val();

//     console.log(x);
//     $.ajax({url:base_url + "search/multi?api_key=" + APIKEY+ "&query=" + x , success: function(result){



//             console.log(result);
//             console.log(result.results);
//                 if($('#profile').prop('checked')){
//                     $('#image').attr("src" , image_url+result.results[0].profile_path);

//                 }
//                 else if ($('#poster').prop('checked')){
//                     $('#image').attr("src" , image_url+result.results[0].poster_path);

//                 }
//         }
//     });

// });

