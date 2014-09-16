'use strict';
angular.module('HardStrict.controllers', [])

.factory('FAQService', function() {
  var faq = [
    {question: 'When is it?', subA: 'When:', answer: 'Fri Oct 3rd (Noon - 7pm, plus kids program 10:30am - Noon), Sat Oct 4th (11am - 7pm), and Sun Oct 5th, 2014 (11am - 7pm).', link: false},
    {question: 'Where is it?', subA: 'Where:', answer: 'Hellman Hollow (formerly Speedway Meadows), Lindley & Marx meadows in Golden Gate Park, San Francisco, CA. Click on the map button on the home page for a map.', link: false},
    {question: 'Camping?', subA: false, answer: 'Sorry, there is no camping allowed in Golden Gate Park. There is a campground in The Presidio - Rob Hill Campground:', link: 'http://www.presidio.gov/explore/Pages/rob-hill-campground.aspx'},
    {question: 'Parking?', subA: false, answer: 'If you park on the street, please respect the neighborhood and DO NOT block driveaways! Parking in the neighborhoods surrounding Golden Gate Park is EXTREMELY limited. We highly encourage taking public transport, biking or walking instead of driving. It is very important that we all respect the neighbors around the park - do NOT block driveways, clean up after yourselves, and keep noise levels down. Remember that people live here and do not use yards as toilets or trash cans.', link: false},
    {question: 'Paid Parking', subA: 'Paid parking will be available on a first come first serve basis at a few lots that include: ', answer: 'George Washington High School - 600 32nd Ave. [enter at 30th Ave. between Geary & Anza] \n Argonne 680 18th Ave. [enter at Cabrillo between 17th Ave. and 18th Ave.] \n Lafayette (Sat & Sun ONLY) - 4545 Anza Street @ 36th Avenue [enter on 36th between Anza and Balboa] \n Presidio Middle School (Sat & Sun ONLY) - 450 30th Ave. [enter on 29th Ave. between Geary and Clement] \n Jefferson Elementary School (Sat & Sun ONLY) - 1725 Irving St. [Enter on 18th Ave. between Irving and Judah]', link: false},
    {question: false, subA: 'Thursday 10/2 : 8pm - Monday 10/6 : 6pm', answer: 'Thursday 10/2 : 8pm - Monday 10/6 : 6pm - JFK drive closed between Transverse and Spreckels Lake turnaround', link: false},
    {question: false, subA: 'Thursday 10/2 : 8pm - Monday 10/6 : 6pm', answer: 'Thursday 10/2 : 8pm - Monday 10/6 : 6pm - JFK drive closed between Stowe Lake Circle & 36th Ave \n 30th Ave closed from Fulton to JFK Drive', link: false},
    {question: false, subA: 'Thursday 10/2 : 10pm - Monday 10/7 : 1pm', answer: 'Thursday 10/2 : 10pm - Monday 10/7 : 1pm - Polo Fields parking area on both north (stables) and south side of Polo Fields', link: false},
    {question: false, subA: 'Thursday 10/2 : 10pm - Sunday 10/5 : 11:55pm', answer: 'Thursday 10/2 : 10pm - Sunday 10/5 : 11:55pm - JFK Drive closed from 36th Ave to Chain of Lakes Drive \n 36th Ave from Fulton to turnaround \n Transverse Drive from Crossover (25th Ave) to MLK Drive \n Overlook Drive from Transverse to Middle Drive West \n Middle Drive West from Transverse to MLK \n Metson Drive from Middle Drive West to MLK', link: false},
    {question: 'What are we allowed to bring?', subA: false, answer: 'Coolers, blankets, and short-back chairs are all allowed. Cameras are ok (no tripods or intrusive equipment please). There will also be vendors on-site selling food and non-alcoholic beverages. No alcohol will be for sale in the park, however, alcohol is allowed as per park rules: no hard alcohol or glass is allowed; beer and wine in non-glass containers ONLY. Any hard alcohol brought to the festival will be confiscated by SFPD and violators may be subject to fine. PLEASE respect the park and pick up and take everything with you that you bring in. There will be a sweep of the park by waste management each evening (which means no saving spaces for the following day).', link: false},
    {question: 'Will there be food available?', subA: false, answer: 'Yes, there will be over 50 purveyors of food and drink featuring the best festival food the Bay Area has to offer. We do not have a complete list of all vendors, but there will be a very wide variety of food.  Patrons are welcome to bring their own picnics. Alcohol will not be sold. Trash and recycling containers are located throughout the Grove. Be a good neighbor and dispose of your trash!', link: false},
    {question: 'Is smoking allowed?', subA: false, answer: 'A City-wide ordinance (Health Code Section 1009.81) went into effect in 2005, prohibiting smoking in all public parks. Smoking is not allowed in any area in Golden Gate Park.', link: false},
    {question: 'Dogs?', subA: false, answer: 'Dogs are allowed as per park rules (on leash, etc.) Dogs should be comfortable with large crowds and loud music. Please clean up after your dogs!', link: false},
    {question: 'Children?', subA: false, answer: 'The festival is family-friendly. Make sure you have the appropriate earplugs for very young children. There will be large crowds and loud music, so be prepared for that.', link: false},
    {question: 'Hotels in area?', subA: false, answer: 'Please call the Chamber of Commerce, use a travel site such as Orbitz or Yahoo Travel, or contact the San Francisco Convention & Visitors Bureau for assistance. Visitors can request assistance from the Visitor Information Center - 415-391-2000 (tollfree at 888-782-9673 (STAY-N-SF)).', link: false},
    {question: 'Transportation around the park? ', subA: false, answer: 'This year we expect the park service to run their shuttle service.', link: false},
    {question: 'Getting to the Hardly Strictly Bluegrass Concert by Public Transit?', subA: false, answer: 'Extra MUNI service will run from 10 AM to 8 PM on Friday, Saturday and Sunday. \n On the north side of the Park , people going to HSB should look for the buses with the 5L on the signage as this will be a limited stop bus and will be a much faster trip out to the Park. \n The SFMTA will be running the 5L which will leave from McAllister and Larkin (outside of the Civic Center BART/MUNI Station) where it will drop off passengers at 30th & Fulton \n Returning, people can pick up the 5L on Fulton between 25th and 30th Avenues and be dropped off at Hyde & Fulton, just a short block away from the Civic Center Station \n On the south side of the Park, the SFMTA will be running extra N Judah LRV service which will go from Caltrain at King & Second Streets to the end of the line at the Beach and return. \n Regular fares will be charged. ', link: false},
    {question: 'Will bike parking be available?', subA: false, answer: 'Yes, we have both self bike parking and valet bike parking. Please review this year\'s map for locations.', link: false},
    {question: 'What time are we allowed in?', subA: false, answer: '10AM entry to the meadows.', link: false},
    {question: 'Restroom facilities?', subA: false, answer: 'There will be port-a-potties on site.', link: false},
    {question: 'Free Water', subA: false, answer: 'Free water will be available at the drinking fountain near the Rock Med tent (between Banjo and Arrow stages).', link: false},
    {question: 'Medical Attention (Nearest Hospital)', subA: false, answer: 'The nearest hospital is Health Connection St Mary\'s Hospital & Medical Center at 450 Stanyan St, San Francisco, CA - (415) 750-5785', link: false},
    {question: 'Will compost and Recycling be available?', subA: false, answer: 'Yes compost and recycling is both available and we encourage you to use to help us move closer to being a Zero waste event. Please also remember to pack out what you bring in!', link: false},
    {question: 'Disabled accessibility?', subA: false, answer: 'Yes, there will be a special section reserved at each stage. Disabled persons can be dropped off at JFK and Transverse. Shuttle Service: Round-trip, wheelchair accessible shuttle service is provided beginning at 10:30AM on Saturday and Sunday. The shuttle stops are located along JFK Drive at each stage location. The shuttle begins at JFK and Transverse Avenue.', link: false},
    {question: 'Disabled Parking?', subA: false, answer: 'A limited number of handicapped permit parking spaces will be available along Transverse Avenue between JFK Drive and MLK Dr. There is no other designated parking area. First Come First Serve.', link: false},
    {question: 'Festival Etiquette!', subA: false, answer: 'You may bring blankets and low chairs. Blanket/ground cover size is limited to 8 x 10 feet due to space restrictions. Blankets and ground covers left unoccupied for more than an hour will be subject to removal. \n Please respect the people around you by keeping your talking volume reasonable so that everyone can hear the music.\n Unauthorized sales, solicitation, and distribution are prohibited.\n Please respect our neighbors in the Richmond and Sunset districts - don\'t block driveways, don\'t litter, don\'t use front or backyards as bathrooms, etc. The happiness of our neighbors is VITAL to the continued success of HSB!\n Please do not sell alcohol, drugs, or any sort of wares - only HSB-approved vendors will be allowed.\n Only officially scheduled performers will be allowed, please no busking.\n Please pack out anything you bring in to the park. Recycling and composting will be available - please make sure to use these services.\n Please do not lock bikes to trees or fences. Valet and self bike parking will be available - see the bike map.', link: false},
    {question: 'Merchandise', subA: false, answer: 'We will be selling T-shirts and CDs of most artists. There are merch booths at the Banjo, Arrow, Star, Towers of Gold, and Rooster Stages. Official HSB Merch will be sold at the Banjo Stage Merch Tent.', link: false},
    {question: 'Lost & Found', subA: false, answer: 'Lost and found is located at all three Info booths (see map)', link: false},
    {question: 'Press inquiries?', subA: false, answer: 'We do not issue press passes. Photography is fine, but no professional video shooting is allowed due to artist request.', link: false},
    {question: 'What else do I need to know?', subA: false, answer: 'Aisles and walkways must be kept clear at all times.\n Dress comfortable and remember to be prepared for sun or fog!\nPlease be aware of personal items. The Festival cannot assume responsibility for lost or stolen items.', link: false}
  ];
  return faq;
})

.factory('ScheduleService', function() {
  var schedule = [
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Alison Browne', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'}
  ];
  return schedule;

})

.run(function($ionicPlatform, $timeout) {
    $ionicPlatform.ready(function() {
        $timeout(function() {
            navigator.splashscreen.hide();
        }, 100);
    });
})

.controller('AppCtrl', function($rootScope, $scope, $ionicScrollDelegate, $ionicModal, $timeout, $state, FAQService) {
  // Form data for the login modal

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  }),
  

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  },

  // Create the faq modal that we will use later
  $ionicModal.fromTemplateUrl('templates/faq.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  }),


  // Triggered in the faq modal to close it
  $scope.closeFaq = function() {
    $scope.modal2.hide();
  },

  $scope.data = {
    showList: false
  },

  $scope.faqList = FAQService,

  // Open the faq modal
  $scope.faq = function() {
    $scope.modal2.show();
    $timeout(function() {
      $scope.showList = true;
    }, 500);
  },

  $scope.sortShow = function() {
    $scope.go('app.playlists');
  },

  $scope.triggerSortAZ = function($scope) {
    $rootScope.$broadcast('sortAZ', $scope);
  },

  $scope.triggerSortStage = function($scope) {
    $rootScope.$broadcast('sortStage', $scope);
  },

  $scope.triggerSortFav = function($scope) {
    $rootScope.$broadcast('sortFav', $scope);
  };


})

.controller('ModalCtrl', function($scope) {
  $scope.newUser = {};
})

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout, $ionicScrollDelegate, ScheduleService) {
  
  $scope.showsStage = [
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Alison Browne', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'}
  ];

  $scope.showsAZ = [
    {favorite: false, name: 'The Aquabats', timeStart: '11:30am', timeEnd: '12:00pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Alison Brown Quintet', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Alison Brown', timeStart: '11:40am', timeEnd: '12:10pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Bill Kirchen & Too Much Fun', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Bad Luck Jonathan', timeStart: '12:30pm', timeEnd: '1:20pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Bela Fleck & Abigail Washburn', timeStart: '3:40pm', timeEnd: '4:30pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Blackie & The Rodeo Kings', timeStart: '2:45pm', timeEnd: '3:40pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Blue Rodeo', timeStart: '12:05pm', timeEnd: '12:50pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Bonnie "Prince" Billy & The Cairo Gang Feat. Dawn McCarthy', timeStart: '2:00pm', timeEnd: '2:50pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Bruce Cockburn', timeStart: '6:10pm', timeEnd: '7:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Buckwheat Zydeco', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Buddy Miller and Friends', timeStart: '4:15pm', timeEnd: '5:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Buddy Miller\'s Cavalcade of Stars', timeStart: '11:45am', timeEnd: '12:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Built to Spill', timeStart: '3:05pm', timeEnd: '3:55pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Caitlin Rose', timeStart: '3:55pm', timeEnd: '4:40pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Carlene Carter', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Chris Isaak', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Chris Smither', timeStart: '4:50pm', timeEnd: '5:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Cannon', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Chuck Prophet & The Mission Express "Strings in the Temple"', timeStart: '2:45pm', timeEnd: '3:30pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Cibo Matto', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Conor Oberst', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Dave Alvin & Phil Alvin with the Guilty Ones', timeStart: '2:45pm', timeEnd: '3:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Dave Rawlings Machine', timeStart: '4:25pm', timeEnd: '5:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Dawes', timeStart: '4:30pm', timeEnd: '5:15pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Deltron 3030 with the 3030 Orchestra', timeStart: '1:20pm', timeEnd: '2:10pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Dry Branch Fire Squad', timeStart: '4:15pm', timeEnd: '5:15pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Dwight Yoakam', timeStart: '5:20pm', timeEnd: '6:10pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Emmylou Harris', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Evolfo', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Frank and Sam', timeStart: '5:10pm', timeEnd: '5:45pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Heidi Clare', timeStart: '3:20pm', timeEnd: '3:50pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Holler Down The Hollow: A Hardly Strictly Salute to the Masters', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'Horseshoe Hill', timeStart: '11:40am', timeEnd: '12:05pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Hot Rize ft. Red Knuckles & The Trailblazers', timeStart: '12:05pm', timeEnd: '12:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Hurray For The Riff Raff', timeStart: '2:35pm', timeEnd: '3:45pm', day: 'FRI', stage: 'ARROW'},
    {favorite: false, name: 'Jason Isbell', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'JB Nimble', timeStart: '2:15pm', timeEnd: '2:30pm', day: 'SUN', stage: 'BANDWAGON'},
    {favorite: false, name: 'Jerry Douglas Presents Earls of Leicester', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Jesse DeNatale', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Jessica Hernandez & The Deltas', timeStart: '3:50pm', timeEnd: '4:35pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Joe Russo\'s Almost Dead', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'John Prine', timeStart: '2:40pm', timeEnd: '3:40pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Johnnyswim', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jon Batiste & Stay Human', timeStart: '3:50pm', timeEnd: '4:30pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Jonathan Wilson', timeStart: '2:10pm', timeEnd: '2:50pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Justin Townes Earle', timeStart: '2:10pm', timeEnd: '3:00pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Kate York', timeStart: '12:15pm', timeEnd: '12:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Kevin Welch, Kieran Kane & Fats Kaplan', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Lake Street Dive', timeStart: '4:30pm', timeEnd: '5:20pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Laurie Lewis & The Right Hands', timeStart: '12:30pm', timeEnd: '1:15pm', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Lucinda Williams', timeStart: '4:30pm', timeEnd: '5:45pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Lukas Nelson & Promise of The Real', timeStart: '4:10pm', timeEnd: '5:10pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Malawi Mouse Boys', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Mavis Staples', timeStart: '3:55pm', timeEnd: '4:45pm', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Moonalice', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Nikki Lane', timeStart: '1:40pm', timeEnd: '2:10pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Nitty Gritty Dirt Band', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'Parker Millsap', timeStart: '2:40pm', timeEnd: '3:30pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Peter Rowan\'s Twang an\' Groove', timeStart: '12:00pm', timeEnd: '12:45pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'PMW', timeStart: '10:30am', timeEnd: '11:00am', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'Ralph Stanley & The Clinch Mountain Boys', timeStart: '2:45pm', timeEnd: '3:55pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Red Baraat', timeStart: '11:40am', timeEnd: '12:30pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Reckless Kelly', timeStart: '4:55pm', timeEnd: '5:45pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Rose\'s Pawn Shop', timeStart: '12:10pm', timeEnd: '12:55pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Rising Appalachia', timeStart: '6:20pm', timeEnd: '7:00pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Robert Earl Keen', timeStart: '5:30pm', timeEnd: '6:45pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Robbie Fulks', timeStart: '11:45am', timeEnd: '12:30pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Rosanne Cash', timeStart: '2:50pm', timeEnd: '3:40pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'Ryan Adams', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Shawn Colvin', timeStart: '2:25pm', timeEnd: '3:05pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Sarah Jarosz', timeStart: '5:10pm', timeEnd: '5:55pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sharon Van Etten', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Shelly Colvin', timeStart: '2:40pm', timeEnd: '3:25pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'Sister Sparrow & The Dirty Birds', timeStart: '6:05pm', timeEnd: '6:50pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'Social Distortion', timeStart: '4:45pm', timeEnd: '5:45pm', day: 'SAT', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'Steve Earle & The Dukes', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'St. Paul & The Broken Bones', timeStart: '2:30pm', timeEnd: '3:20pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'Striking Matches', timeStart: '1:00pm', timeEnd: '1:30pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Sun Kil Moon', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'T Bone Burnett', timeStart: '4:00pm', timeEnd: '5:00pm', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'Thao & The Get Down Stay Down', timeStart: '1:30pm', timeEnd: '2:15pm', day: 'FRI', stage: 'STAR'},
    {favorite: false, name: 'The Apache Relay', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'TOWERS OF GOLD'},
    {favorite: false, name: 'The Felice Brothers', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The Flatlanders ft. Joe Ely, Jimmie Dale Gilmour & Butch Hancock', timeStart: '6:15pm', timeEnd: '7:00pm', day: 'SAT', stage: 'ARROW'},
    {favorite: false, name: 'The Go To Hell Man Clan', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ROOSTER'},
    {favorite: false, name: 'The Good Life', timeStart: '1:00pm', timeEnd: '1:40pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'The High Bar Gang', timeStart: '1:25pm', timeEnd: '2:10pm', day: 'SUN', stage: 'PORCH'},
    {favorite: false, name: 'The Lone Bellow', timeStart: '1:15pm', timeEnd: '2:00pm', day: 'SUN', stage: 'STAR'},
    {favorite: false, name: 'The Mastersons', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'PORCH'},
    {favorite: false, name: 'The McCrary Sisters', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Sam Chase', timeStart: '11:00am', timeEnd: '11:40am', day: 'SUN', stage: 'ARROW'},
    {favorite: false, name: 'The Time Jumpers', timeStart: '1:25pm', timeEnd: '2:15pm', day: 'SAT', stage: 'BANJO'},
    {favorite: false, name: 'The Waybacks', timeStart: '1:15pm', timeEnd: '2:05pm', day: 'FRI', stage: 'BANJO'},
    {favorite: false, name: 'Tony Joe White', timeStart: '3:20pm', timeEnd: '4:00pm', day: 'SAT', stage: 'ROOSTER'},
    {favorite: false, name: 'Tweedy', timeStart: '4:05pm', timeEnd: '5:15pm', day: 'SUN', stage: 'BANJO'},
    {favorite: false, name: 'Waxahatchee', timeStart: '12:00pm', timeEnd: '12:30pm', day: 'FRI', stage: 'ROOSTER'},
    {favorite: false, name: 'Whograss', timeStart: '11:00am', timeEnd: '11:40am', day: 'SAT', stage: 'STAR'},
    {favorite: false, name: 'Willie Watson', timeStart: '2:00pm', timeEnd: '2:30pm', day: 'SAT', stage: 'BANDWAGON'},
    {favorite: false, name: 'Yo La Tengo', timeStart: '5:45pm', timeEnd: '7:00pm', day: 'FRI', stage: 'ARROW'}
  ];

  $scope.getItemHeight = function (item) {
    var iLength = item.name.length;
    if (iLength > 30) {
      return 140;
    } else if (iLength > 17) {
      return 100;
    } else {
      return 73;
    }
  };

  $scope.toggleFave = function (item) {
    if (item.favorite) {
      item.favorite = false;
    } else {
      item.favorite = true;
    }
  };
  
 
  $scope.sortName = function () {
    var sorted = $scope.showsAZ;
    $scope.showsStage = sorted;
  };

  $scope.sortStage = function () {
    $scope.showsStage = ScheduleService;
  };

  $scope.sortFav = function () {
    var sorted = $scope.showsStage;
    var sorted2 = $scope.showsAZ;
    var favSorted;
    sorted = sorted.filter(function(a) {
      if (a.favorite) {
        return a;
      }
    });
    sorted2 = sorted2.filter(function(a) {
      if (a.favorite) {
        return a;
      }
    });
    favSorted = sorted.concat(sorted2);
    var sortedList;
    var makeSortedList;
    makeSortedList = function () {
      if (favSorted.length) {
        sortedList = favSorted;
      } else {
        sortedList = [{favorite: false, name: 'Star some artists to make your own custom lineup,\n it\'s the easiest way to stay on top of all this great music!', timeStart:'', timeEnd:'', stage:'Try sorting by Band Name or Stage Name'}];
        $timeout(function(){
          $scope.showsStage[0].favorite = true;
        }, 800);
        $timeout(function(){
          $scope.showsStage[0].favorite = false;
        }, 1300);
        $timeout(function(){
          $scope.showsStage[0].favorite = true;
        }, 1800);
      }
    };
    makeSortedList();
    $scope.showsStage = sortedList;
    $ionicScrollDelegate.scrollTop(true);
  };

  $scope.$on('sortAZ', function(event, args) {
    $scope.sortName();
  });

  $scope.$on('sortStage', function(event, args) {
    $scope.sortStage();
  });

  $scope.$on('sortFav', function(event, args) {
    $scope.sortFav();
  });


  // Doesn't work in Cordova :(
  // $scope.showPopup = function() {

  //   var myPopup = $ionicPopup.show({
  //     templateUrl: './../templates/sort.html',
  //     title: 'Choose how to sort',
  //     scope: $scope
  //   });
  //   $timeout(function() {
  //     myPopup.close(); //close the popup after 2.5 seconds
  //   }, 2500);
  //  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
