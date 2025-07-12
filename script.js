// Actual GRE words data from your PDFs
const wordsData = {
    easy: [
        { word: "Accessible", definition: "Able to be reached or used" },
        { word: "Adapt", definition: "To adjust or make usable" },
        { word: "Analysis", definition: "The process of looking at something carefully and methodically" },
        { word: "Application", definition: "The act of using something" },
        { word: "Awe", definition: "An emotion combining fear and wonder" },
        { word: "Benefactor", definition: "Someone who takes care of or gives money to another person" },
        { word: "Bizarre", definition: "Very strange; unusual" },
        { word: "Chaos", definition: "Disorder" },
        { word: "Characterize", definition: "To describe the qualities of" },
        { word: "Cite", definition: "To quote or refer to a person's speech or writing" },
        { word: "Colleague", definition: "A co-worker" },
        { word: "Commodity", definition: "Something bought or sold" },
        { word: "Compel", definition: "To force" },
        { word: "Competition", definition: "A contest between opponents" },
        { word: "Compromise", definition: "An agreement which partially satisfies each side" },
        { word: "Conceive", definition: "To imagine" },
        { word: "Conclusive", definition: "Putting an end to any uncertainty or doubt; final" },
        { word: "Conform", definition: "To act in accordance with prevailing standards or customs" },
        { word: "Conquer", definition: "To defeat an opponent" },
        { word: "Consciousness", definition: "The state of being aware and awake" },
        { word: "Consequence", definition: "A result" },
        { word: "Consideration", definition: "Careful thought" },
        { word: "Contradiction", definition: "A situation in which two things do not make sense together" },
        { word: "Contrary", definition: "Opposite; disagreeing" },
        { word: "Controversial", definition: "Causing debate or argument" },
        { word: "Conventional", definition: "Following accepted customs; normal" },
        { word: "Convey", definition: "To express" },
        { word: "Corruption", definition: "Dishonesty; immoral behavior" },
        { word: "Critical", definition: "Tending to call attention to flaws" },
        { word: "Crude", definition: "Raw; rude" },
        { word: "Cultivate", definition: "To help something to grow" },
        { word: "Current", definition: "Up-to-date; at the moment" },
        { word: "Cynical", definition: "Distrustful of people's motives" },
        { word: "Deliberate", definition: "Carefully considered and intended" },
        { word: "Depict", definition: "To represent by or as if by a picture; to describe" },
        { word: "Detached", definition: "Set apart from others" },
        { word: "Determined", definition: "Committed; certain" },
        { word: "Devise", definition: "To imagine or create" },
        { word: "Dominant", definition: "Most powerful" },
        { word: "Draft", definition: "A version of a letter or essay" },
        { word: "Enhance", definition: "To make better or stronger" },
        { word: "Esteem", definition: "Respect or admiration" },
        { word: "Exasperation", definition: "The state of being annoyed or irritated" },
        { word: "Excavation", definition: "Digging" },
        { word: "Exhibit", definition: "To show publicly" },
        { word: "Extent", definition: "The range over which something extends; scope" },
        { word: "Forge", definition: "To make or imitate falsely, especially with intent to defraud" },
        { word: "Fragile", definition: "Easily broken" },
        { word: "Funding", definition: "Financial resources provided to make some project possible" },
        { word: "Generalization", definition: "A statement or judgement about a group based on a few examples" },
        { word: "Generate", definition: "To create" },
        { word: "Harsh", definition: "Very strict; unkind or cruel" },
        { word: "Headstrong", definition: "Bold; stubborn" },
        { word: "Humanity", definition: "The quality of being humane; kindness" },
        { word: "Ideal", definition: "A standard of perfection, beauty, or excellence" },
        { word: "Illumination", definition: "Lighting" },
        { word: "Immediate", definition: "Direct; without anything in between" },
        { word: "Implement", definition: "Tool" },
        { word: "Imply", definition: "To lead someone to believe something without directly stating it" },
        { word: "Impractical", definition: "Not usable or effective" },
        { word: "Impulse", definition: "Force or urge" },
        { word: "Inconsistent", definition: "Not agreeing with another fact or claim" },
        { word: "Indignation", definition: "Moral outrage" },
        { word: "Infer", definition: "To conclude or figure out" },
        { word: "Influence", definition: "Ability to persuade or affect" },
        { word: "Influential", definition: "Having influence or power" },
        { word: "Insightful", definition: "Exhibiting clear and deep perception" },
        { word: "Irrelevant", definition: "Having no connection to a subject" },
        { word: "Labor", definition: "Work; effort" },
        { word: "Mere", definition: "Only; nothing more than" },
        { word: "Misleading", definition: "Deceptive" },
        { word: "Moral", definition: "Relating to principles of right and wrong in behavior" },
        { word: "Morose", definition: "Sad and dreary" },
        { word: "Mythical", definition: "Fictional; unreal" },
        { word: "Novel", definition: "A book that tells a fictional story" },
        { word: "Organic", definition: "Derived from living organisms" },
        { word: "Outdated", definition: "Old-fashioned" },
        { word: "Overlook", definition: "To fail to see" },
        { word: "Passive", definition: "Not active" },
        { word: "Patron", definition: "One who uses wealth or influence to help a cause" },
        { word: "Perseverance", definition: "The act of not quitting" },
        { word: "Persist", definition: "To continue" },
        { word: "Persuasive", definition: "Able to move people to act or believe" },
        { word: "Pictorial", definition: "Consisting of pictures" },
        { word: "Plastic", definition: "Easily bendable" },
        { word: "Playwright", definition: "Someone who writes plays" },
        { word: "Poll", definition: "A survey of people's opinions" },
        { word: "Portrait", definition: "A picture or painting of a person" },
        { word: "Potential", definition: "Ability" },
        { word: "Practical", definition: "Concerned with actual use or practice" },
        { word: "Predominant", definition: "Having superior numbers, strength, or importance" },
        { word: "Primarily", definition: "Most importantly" },
        { word: "Principle", definition: "A rule or guide" },
        { word: "Prominence", definition: "The state of being noticeable" },
        { word: "Prose", definition: "Words in sentences and paragraphs, as opposed to poetry" },
        { word: "Prosperity", definition: "The state of being successful; economic well-being" },
        { word: "Quest", definition: "A long search" },
        { word: "Refute", definition: "To disprove" },
        { word: "Relatively", definition: "In comparison to something else" },
        { word: "Resentment", definition: "Deep hatred" },
        { word: "Resolution", definition: "Something settled or resolved; the outcome of a decision" },
        { word: "Revolution", definition: "A political overthrow" },
        { word: "Skeptical", definition: "Doubtful; disbelieving" },
        { word: "Standard", definition: "Common or ordinary" },
        { word: "Strive", definition: "To try very hard" },
        { word: "Subtle", definition: "Hard to detect; not obvious" },
        { word: "Sufficient", definition: "Enough" },
        { word: "Sympathy", definition: "Compassion" },
        { word: "Tolerance", definition: "Ability to endure pain or hardship; respecting the beliefs or practices of others" },
        { word: "Transparent", definition: "Clear; see-through" },
        { word: "Undermine", definition: "To remove support from; to weaken" },
        { word: "Unscrupulous", definition: "Without honor or morals" },
        { word: "Validity", definition: "Truth; correctness" },
        { word: "Values", definition: "Beliefs of a person or social group" },
        { word: "Verify", definition: "To test the truth of" },
        { word: "Vital", definition: "Important, necessary" },
        { word: "Vivid", definition: "Bright or lively" }
    ],
    medium: [
        // You can add more advanced words here later
        { word: "Abstruse", definition: "Difficult to understand; obscure" },
        { word: "Bellicose", definition: "Demonstrating aggression and willingness to fight" },
        { word: "Cogent", definition: "Clear, logical, and convincing" },
        { word: "Didactic", definition: "Intended to teach, particularly in moral instruction" },
        { word: "Ephemeral", definition: "Lasting for a very short time" },
        { word: "Fastidious", definition: "Very attentive to accuracy and detail; meticulous" },
        { word: "Garrulous", definition: "Excessively talkative, especially on trivial matters" },
        { word: "Hackneyed", definition: "Lacking originality or freshness; overused" },
        { word: "Iconoclastic", definition: "Attacking or ignoring cherished beliefs and institutions" },
        { word: "Jocular", definition: "Fond of or characterized by joking; humorous" }
    ]
};

// App state
let currentDifficulty = 'easy';
let currentWordIndex = 0;
let currentWords = [];
let isFlipped = false;
let score = 0;
let totalAnswered = 0;
let answeredCards = new Set();

// DOM elements
const flashcard = document.getElementById('flashcard');
const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');
const currentCardElement = document.getElementById('currentCard');
const totalCardsElement = document.getElementById('totalCards');
const scoreElement = document.getElementById('score');
const totalAnsweredElement = document.getElementById('totalAnswered');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const answerControls = document.getElementById('answerControls');
const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Initialize app
function init() {
    setupEventListeners();
    loadWords();
    displayCurrentCard();
    updateUI();
}

// Setup event listeners
function setupEventListeners() {
    // Flashcard flip
    flashcard.addEventListener('click', flipCard);
    
    // Navigation
    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);
    
    // Answer tracking
    correctBtn.addEventListener('click', () => markAnswer(true));
    incorrectBtn.addEventListener('click', () => markAnswer(false));
    
    // Action buttons
    shuffleBtn.addEventListener('click', shuffleWords);
    resetBtn.addEventListener('click', resetProgress);
    
    // Difficulty selection
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => changeDifficulty(btn.dataset.difficulty));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Handle keyboard navigation
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowLeft':
            goToPrevious();
            break;
        case 'ArrowRight':
            goToNext();
            break;
        case ' ':
            e.preventDefault();
            flipCard();
            break;
        case '1':
            if (isFlipped) markAnswer(false);
            break;
        case '2':
            if (isFlipped) markAnswer(true);
            break;
        case 's':
            shuffleWords();
            break;
        case 'r':
            resetProgress();
            break;
    }
}

// Load words based on difficulty
function loadWords() {
    switch(currentDifficulty) {
        case 'easy':
            currentWords = [...wordsData.easy];
            break;
        case 'medium':
            currentWords = [...wordsData.medium];
            break;
        case 'all':
            currentWords = [...wordsData.easy, ...wordsData.medium];
            break;
    }
    
    // Reset progress when changing difficulty
    currentWordIndex = 0;
    score = 0;
    totalAnswered = 0;
    answeredCards.clear();
}

// Change difficulty
function changeDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // Update active button
    difficultyBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
    
    loadWords();
    displayCurrentCard();
    updateUI();
}

// Display current card
function displayCurrentCard() {
    if (currentWords.length === 0) return;
    
    const currentWord = currentWords[currentWordIndex];
    wordElement.textContent = currentWord.word;
    definitionElement.textContent = currentWord.definition;
    
    // Reset flip state
    isFlipped = false;
    flashcard.classList.remove('flipped');
    
    // Show/hide answer controls based on flip state
    answerControls.style.display = 'none';
}

// Flip card
function flipCard() {
    if (currentWords.length === 0) return;
    
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped');
    
    // Show answer controls when flipped
    answerControls.style.display = isFlipped ? 'flex' : 'none';
}

// Go to previous card
function goToPrevious() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayCurrentCard();
        updateUI();
    }
}

// Go to next card
function goToNext() {
    if (currentWordIndex < currentWords.length - 1) {
        currentWordIndex++;
        displayCurrentCard();
        updateUI();
    }
}

// Mark answer
function markAnswer(correct) {
    const cardId = `${currentDifficulty}-${currentWordIndex}`;
    
    if (!answeredCards.has(cardId)) {
        totalAnswered++;
        answeredCards.add(cardId);
        
        if (correct) {
            score++;
        }
    }
    
    updateUI();
    
    // Auto-advance to next card
    setTimeout(() => {
        if (currentWordIndex < currentWords.length - 1) {
            goToNext();
        }
    }, 500);
}

// Shuffle words
function shuffleWords() {
    for (let i = currentWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
    }
    
    currentWordIndex = 0;
    displayCurrentCard();
    updateUI();
}

// Reset progress
function resetProgress() {
    score = 0;
    totalAnswered = 0;
    answeredCards.clear();
    currentWordIndex = 0;
    displayCurrentCard();
    updateUI();
}

// Update UI elements
function updateUI() {
    // Update card counter
    currentCardElement.textContent = currentWordIndex + 1;
    totalCardsElement.textContent = currentWords.length;
    
    // Update score
    scoreElement.textContent = score;
    totalAnsweredElement.textContent = totalAnswered;
    
    // Update progress bar
    const progressPercentage = currentWords.length > 0 ? 
        ((currentWordIndex + 1) / currentWords.length) * 100 : 0;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Update navigation buttons
    prevBtn.disabled = currentWordIndex === 0;
    nextBtn.disabled = currentWordIndex === currentWords.length - 1;
}

// Utility function to add more words (for when PDF data is available)
function addWordsFromPDF(pdfWords, difficulty) {
    if (!wordsData[difficulty]) {
        wordsData[difficulty] = [];
    }
    
    wordsData[difficulty] = [...wordsData[difficulty], ...pdfWords];
    
    // Reload if current difficulty matches
    if (currentDifficulty === difficulty || currentDifficulty === 'all') {
        loadWords();
        displayCurrentCard();
        updateUI();
    }
}

// Touch gesture support for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchHandled = false;

flashcard.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchHandled = false;
});

flashcard.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        touchHandled = true;
        e.preventDefault(); // Prevent click event
        if (deltaX > 0) {
            goToPrevious();
        } else {
            goToNext();
        }
    }
    // Simple tap (not swipe)
    else if (Math.abs(deltaY) < 50 && Math.abs(deltaX) < 50) {
        touchHandled = true;
        e.preventDefault(); // Prevent click event
        flipCard();
    }
    
    // Reset flag after a short delay
    setTimeout(() => {
        touchHandled = false;
    }, 100);
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 