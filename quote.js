var today = new Date();
var hourNow = today.getHours();
var quote;
var quotename;

if (hourNow > 20) {
    quote = 'The only way to do great work is to love what you do.';
    quotename = ' - Steve Jobs';
} else if (hourNow > 18) {
    quote = 'Every artist was first an amateur.';
    quotename = ' - Ralph Waldo Emerson';
} else if (hourNow > 16) {
    quote = 'Art is not what you see, but what you make others see.';
    quotename = ' - Edgar Degas';
} else if (hourNow > 14) {
    quote = 'our work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.';
    quotename = ' - Steve Jobs';
} else if (hourNow > 12) {
    quote = 'The only thing I know is that I paint because I need to, and I paint whatever passes through my head without any other consideration.';
    quotename = ' - Frida Kahlo';
} else if (hourNow > 10) {
    quote = 'Art is the most intense mode of individualism that the world has known.';
    quotename = ' - Oscar Wilde';
} else if (hourNow > 0) {
    quote = 'Every sunrise brings a new canvas for your aspirations.';
    quotename = ' - Daniel Brooks';
} else {
    quote = 'Believe in the magic within you, for it has the power to transform dreams into reality.';
    quotename = ' - Maya Anderson';
}

document.write('<p class="quote">' + '<q>' + quote + '</q>' + quotename + '</p>');