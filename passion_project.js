document.getElementById("generate_button").addEventListener("click", () => {

    // User Requirements
	const theme = document.getElementById("theme_select").value;
    const includeDictionary = document.getElementById("Dictionary").checked;
    const includeUppercase = document.getElementById("Uppercase").checked;
    const includeNumbers = document.getElementById("Numbers").checked;
    const includeSymbols = document.getElementById("Symbols").checked;
    const length = parseInt(document.getElementById("pass_length").value);

    console.log("Settings:", {
        dictionary: includeDictionary,
        uppercase: includeUppercase,
        numbers: includeNumbers,
        symbols: includeSymbols,
        length: length
    });

    // Password Result
    document.getElementById("output").textContent = "Password goes here!";
	
	// Password Requirements
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";
	
	let characterset = lowercase; 
	if (includeUppercase) characterset += uppercase;
	if (includeNumbers) characterset += numbers;
	if (includeSymbols) characterset += symbols;

	// Dictionary Functionality
	let dictionary_pass = "";

	if (includeDictionary) {

		// If the user chose a theme (not "none"), use the themed list
		if (theme !== "none") {
			const word_list = themed_words[theme];
			const random_word = word_list[Math.floor(Math.random() * word_list.length)];
			dictionary_pass = random_word;
		}
		// Otherwise, fall back to the normal dictionary words
		else {
			const random_word =
				dictionary_words[Math.floor(Math.random() * dictionary_words.length)];
			dictionary_pass = random_word;
		}
	}

	let required_chars = "";

	// LOGIC: If uppercase is selected, then add one random uppercase letter
	if (includeUppercase) {
		required_chars += uppercase[Math.floor(Math.random() * uppercase.length)];
	}

	// LOGIC: If numbers is selected, then add one random number
	if (includeNumbers) {
		required_chars += numbers[Math.floor(Math.random() * numbers.length)];
	}

	// LOGIC: If symbols is selected, then add one random symbol
	if (includeSymbols) {
		required_chars += symbols[Math.floor(Math.random() * symbols.length)];
	}

	// Setting length requirements
	const remaining_length = length - required_chars.length - dictionary_pass.length;
	
	// ERROR CHECK
	if (remaining_length < 0) {
		document.getElementById("output").textContent =
			"***ERROR: Password length is too short for the selected options. Please increase the password length.***";
		return;
	}

	// Random Character Functionality
	let random_pass = "";
	for (let i = 0; i < remaining_length; i++) {
		const random_index = Math.floor(Math.random() * characterset.length);
		random_pass += characterset[random_index];
	}

	// Combining Functionality
	const final_pass = dictionary_pass + required_chars + random_pass;
	document.getElementById("output").textContent = final_pass;

});

	// Short list of dictionary words
	const dictionary_words = ["alpha","brisk","orbit","tiger","silver","nova","ember","cyber","arrow","pixel","canvas","rocket","fusion","glimmer","whisper","shadow","crystal","river","flame","forest","galaxy","legend","python","matrix","sprint","delta","cinder","echo","vivid","solstice","spectrum","nebula","horizon","mythic","marble","lunar","terra","aqua","static","pulse","harbor","summit","velocity","quartz","onyx","ember","cascade","ripple","vortex","quantum","binary","signal","carbon","breeze","cobalt","fable","solaria","tundra","quiver","sentinel","phoenix","emberstorm","radiant","saffron","vividly","wildwood","spire","harvest","crimson","starlit","voyager","wander","glisten","evergreen","thunder","willow","skyline","moonfall","astral","serene","tempest","zephyr","oceanic","meadow","embercore","ironwood","stormfront","runic","emberstone","midnight","brightly","falcon","spirefall","shadowed","lighthouse","bramble","sunrise","mistwood"
	];

	// List of themed words
	const themed_words = {
		zelda: [
			"hyrule","link","zelda","ganon","sheik","mastersword","rupee","triforce","korok","epona","mask","ocarina","courage","wisdom","strength"
		],

		nature: [
			"willow","river","forest","tundra","meadow","cedar","falcon","moss","ocean","spruce","raven","fairy","oak","tree","desert"
		],

		lord_of_the_rings: [
			"shire","hobbit","gandalf","mordor","ring","fellowship","frodo","samwise","aragorn","rohan","isengaurd","axe","sword","merry","pippin","secondbreakfast"
		],

		sports: [
			"soccer","basketball","baseball","hockey","football","goal","archery","coach","victory","runner","fenway","redsox","patriots","bruins"
		]
	};




