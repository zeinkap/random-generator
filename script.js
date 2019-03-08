function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
	// add zero in front of numbers < 10
    if (i<10) {i = "0" + i};  
    return i;
}

//hadiths array
var hadiths = [
"I heard Allah's Messenger (ﷺ) saying, \"The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.",
"While I was walking, all of a sudden I heard a voice from the sky. I looked up and saw the same angel who had visited me at the cave of Hira' sitting on a chair between the sky and the earth. I got afraid of him and came back home and said, 'Wrap me (in blankets).' And then Allah revealed the following Holy Verses (of Quran): 'O you (i.e. Muhammad)! wrapped up in garments!' Arise and warn (the people against Allah's Punishment),... up to 'and desert the idols.' (74.1-5) After this the revelation started coming strongly, frequently and regularly.",
"Allah's Messenger (ﷺ) said: Islam is based on (the following) five (principles):\n1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Messenger (ﷺ). \n2. To offer the (compulsory congregational) prayers dutifully and perfectly. \n3. To pay Zakat (i.e. obligatory charity) . \n4. To perform Hajj. (i.e. Pilgrimage to Mecca) \n5. To observe fast during the month of Ramadan.",
"The Prophet (ﷺ) used to take care of us in preaching by selecting a suitable time, so that we might not get bored. (He abstained from pestering us with sermons and knowledge all the time).",
"The Prophet (ﷺ) said, \"A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden.",
"Some people asked Allah's Messenger (ﷺ), \"Whose Islam is the best? i.e. (Who is a very good Muslim)?\" He replied, \"One who avoids harming the Muslims with his tongue and hands.",
"The Prophet (ﷺ) said, \"None of you will have faith till he wishes for his (Muslim) brother what he likes for himself.",
"Allah's Messenger (ﷺ) said, \"By Him in Whose Hands my life is, none of you will have faith till he loves me more than his father and his children.",
"The Prophet (ﷺ) said, \"Whoever possesses the following three qualities will have the sweetness (delight) of faith:\n1. The one to whom Allah and His Apostle becomes dearer than anything else.\n2. Who loves a person and he loves him only for Allah's sake.\n3. Who hates to revert to Atheism (disbelief) as he hates to be thrown into the fire.",
"The Prophet (ﷺ) said, \"Facilitate things to people (concerning religious matters), and do not make it hard for them and give them good tidings and do not make them run away (from Islam).",
"The Prophet (ﷺ) said, \"If a man spends on his family (with the intention of having a reward from Allah) sincerely for Allah's sake then it is a (kind of) alms-giving in reward for him.",
"Allah's Messenger (ﷺ) said, \"You will be rewarded for whatever you spend for Allah's sake even if it were a morsel which you put in your wife's mouth.",
"I have memorized two kinds of knowledge from Allah's Messenger (ﷺ) . I have propagated one of them to you and if I propagated the second, then my pharynx (throat) would be cut (i.e. killed).",
"I used to get the emotional urethral discharge frequently so I requested Al-Miqdad to ask the Prophet (ﷺ) about it. Al-Miqdad asked him and he replied, \"One has to perform ablution (after it).",
"The Prophet (ﷺ) said, \"Abusing a Muslim is Fusuq (an evil doing) and killing him is Kufr (disbelief).",
"I gave the pledge of allegiance to Allah's Messenger (ﷺ) for the following: \n1. Offer prayers perfectly \n2. Pay the Zakat (obligatory charity) \n3. Be sincere and true to every Muslim.",
"Allah's Messenger (ﷺ) said, \"If I had formerly known what I came to know recently, I would not have driven the Hadi with me and would have finished the state of Ihram along with the people when they finished it.",
"Allah's Messenger (ﷺ) said, \"Were I not afraid that it would be hard on my followers, I would order them to use the siwak (as obligatory, for cleaning the teeth).",
"The Prophet (ﷺ) said, \"But for the emigration, I would have been one of the Ansar; and if the people took their way in a valley (or a mountain pass), I would take Ansar's valley or their mountain pass.",
"The Prophet (ﷺ) said, \"Allah does not accept prayer of anyone of you if he does Hadath (passes wind) till he performs the ablution (anew).",
"Abu Rafi` sold a house to Sa`d bin Malik for four-hundred Mithqal of gold, and said, \"If I had not heard the Prophet (ﷺ) saying, 'The neighbor has more right to be taken care of by his neighbor (than anyone else),' then I would not have sold it to you."
]

console.log(hadiths.length);

function newHadith() {
	var randomNumber = Math.floor(Math.random() * (hadiths.length));
	document.getElementById('quoteDisplay').innerHTML = hadiths[randomNumber];
}

function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

