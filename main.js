document.addEventListener('DOMContentLoaded', () => {
    const cookiesContainer = document.querySelector('.cookies-container');
    const modal = document.getElementById('recipe-modal');
    const closeModal = document.querySelector('.close-modal');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeDetails = document.getElementById('recipe-details');

    // Cookie data
    const cookies = [
        {
            name: "Chocolate Chip",
            type: "chocolate-chip",
            recipe: {
                ingredients: [
                    "2 1/4 cups all-purpose flour",
                    "1 tsp baking soda",
                    "1 tsp salt",
                    "1 cup butter, softened",
                    "3/4 cup granulated sugar",
                    "3/4 cup packed brown sugar",
                    "2 large eggs",
                    "2 cups chocolate chips"
                ],
                instructions: "Preheat oven to 375°F. Mix dry ingredients. Cream butter and sugars, then beat in eggs. Combine with dry ingredients, then stir in chocolate chips. Drop by rounded tablespoons onto ungreased baking sheets. Bake for 9-11 minutes."
            }
        },
        {
            name: "Sugar Cookie",
            type: "sugar",
            recipe: {
                ingredients: [
                    "2 3/4 cups all-purpose flour",
                    "1 tsp baking soda",
                    "1/2 tsp baking powder",
                    "1 cup butter, softened",
                    "1 1/2 cups white sugar",
                    "1 egg",
                    "1 tsp vanilla extract"
                ],
                instructions: "Preheat oven to 375°F. In a small bowl, stir together flour, baking soda, and baking powder. In a large bowl, cream together butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets. Bake 8-10 minutes."
            }
        },
        {
            name: "Oatmeal Raisin",
            type: "oatmeal",
            recipe: {
                ingredients: [
                    "1 cup butter, softened",
                    "1 cup packed brown sugar",
                    "1/2 cup white sugar",
                    "2 eggs",
                    "2 tsp vanilla extract",
                    "1 1/4 cups all-purpose flour",
                    "1/2 tsp baking soda",
                    "1 tsp ground cinnamon",
                    "1/2 tsp salt",
                    "3 cups rolled oats",
                    "1 1/2 cups raisins"
                ],
                instructions: "Preheat oven to 375°F. In a large bowl, cream together butter and sugars until smooth. Beat in eggs and vanilla. Combine flour, baking soda, cinnamon, and salt; stir into the creamed mixture. Mix in oats and raisins. Drop by rounded teaspoonfuls onto ungreased cookie sheets. Bake for 8-10 minutes."
            }
        },
        {
            name: "Gingerbread",
            type: "gingerbread",
            recipe: {
                ingredients: [
                    "3 cups all-purpose flour",
                    "1 1/2 tsp baking powder",
                    "3/4 tsp baking soda",
                    "1/4 tsp salt",
                    "1 tbsp ground ginger",
                    "1 3/4 tsp ground cinnamon",
                    "1/4 tsp ground cloves",
                    "6 tbsp unsalted butter",
                    "3/4 cup dark brown sugar",
                    "1 large egg",
                    "1/2 cup molasses",
                    "2 tsp vanilla"
                ],
                instructions: "Preheat oven to 375°F. Whisk together flour, baking powder, baking soda, salt, ginger, cinnamon, and cloves. In another bowl, beat butter, brown sugar, and egg. Add molasses and vanilla. Gradually stir in dry ingredients. Roll dough into 1 1/2-inch balls and place on baking sheets. Bake for 10-12 minutes."
            }
        },
        {
            name: "Peanut Butter",
            type: "peanut-butter",
            recipe: {
                ingredients: [
                    "1 cup peanut butter",
                    "1/2 cup white sugar",
                    "1/2 cup packed brown sugar",
                    "1 egg",
                    "1 tsp vanilla extract",
                    "1 tsp baking soda"
                ],
                instructions: "Preheat oven to 350°F. Mix all ingredients together. Roll into 1-inch balls and place on ungreased baking sheets. Flatten with a fork, making a criss-cross pattern. Bake for 8-10 minutes."
            }
        },
        {
            name: "Snickerdoodle",
            type: "snickerdoodle",
            recipe: {
                ingredients: [
                    "1 cup butter, softened",
                    "1 1/2 cups white sugar",
                    "2 large eggs",
                    "2 3/4 cups all-purpose flour",
                    "2 tsp cream of tartar",
                    "1 tsp baking soda",
                    "1/4 tsp salt",
                    "2 tbsp white sugar",
                    "2 tsp ground cinnamon"
                ],
                instructions: "Preheat oven to 400°F. Cream together butter and sugar. Add eggs and mix well. Combine flour, cream of tartar, baking soda, and salt. Stir into creamed mixture. Mix 2 tablespoons sugar and cinnamon. Shape dough into 1-inch balls, roll in cinnamon-sugar, and place 2 inches apart on ungreased baking sheets. Bake for 8-10 minutes."
            }
        }
    ];

    // Create cookie elements with plates and titles below
    cookies.forEach(cookie => {
        // Create wrapper div for each cookie
        const cookieWrapper = document.createElement('div');
        cookieWrapper.className = 'cookie-wrapper';
        
        // Create plate element
        const plateEl = document.createElement('div');
        plateEl.className = 'cookie-plate';
        
        // Create cookie element
        const cookieEl = document.createElement('div');
        cookieEl.className = `cookie ${cookie.type}`;
        cookieEl.dataset.name = cookie.name;
        
        // Add chocolate chips if this is a chocolate chip cookie
        if (cookie.type === 'chocolate-chip') {
            // Create 7 chocolate chips
            for (let i = 1; i <= 7; i++) {
                const chip = document.createElement('div');
                chip.className = `chip-${i}`;
                cookieEl.appendChild(chip);
            }
        }
        
        // Create title element
        const titleEl = document.createElement('div');
        titleEl.className = 'cookie-title';
        titleEl.textContent = cookie.name;
        
        // Assemble the elements
        plateEl.appendChild(cookieEl);
        cookieWrapper.appendChild(plateEl);
        cookieWrapper.appendChild(titleEl);
        
        // Add to the container
        cookiesContainer.appendChild(cookieWrapper);
        
        // Add click event to show recipe
        cookieEl.addEventListener('click', () => showRecipe(cookie));
        
        // Debug: Log cookie creation
        console.log(`Created cookie: ${cookie.name} (${cookie.type})`);
    });
    
    // Debug: Log container info
    console.log('Cookies container:', cookiesContainer);
    console.log('Number of cookie wrappers:', document.querySelectorAll('.cookie-wrapper').length);

    // Show recipe in modal
    function showRecipe(cookie) {
        recipeTitle.textContent = `${cookie.name} Recipe`;
        recipeDetails.innerHTML = `
            <h3>Ingredients:</h3>
            <ul>
                ${cookie.recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${cookie.recipe.instructions}</p>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Close modal
    function closeModalHandler() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    closeModal.addEventListener('click', closeModalHandler);

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalHandler();
        }
    });
});
