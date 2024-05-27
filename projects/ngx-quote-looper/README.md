# NgxQuoteLooper

NgxQuoteLooper is an Angular library made up of a single component. This component takes an array of quotes and cycles through them, gracefully fading in and out.

## Installation

Use npm to install NgxQuoteLooper. Use the command below or copy it from the Install field provided in the column to the right.

```bash
npm i ngx-quote-looper
```

## Component Inputs

- inputQuotes - ```any[]``` - Pass in an array of quotes and associated authors.
- authorCSS - ```{ [key: string]: string }``` - Key-string value pair to style the HTML element with the authorCSS class.
- quoteCSS - ```{ [key: string]: string }``` - Key-string value pair to style the HTML element with the quoteCSS class.
- looperCSS - ```{ [key: string]: string }``` - Key-string value pair to style the HTML element with the looperCSS class.
- fadeDuration - ```number``` - A number to control the duration of the fade in and fade out. This number should be treated as a millisecond value (3000 = 3 seconds). **Default is 3000 (3 seconds)**.
- loopDuration - ```number``` - A number to control the duration of the full loop for a quote (both the fading in and out). This number should be treated as a millisecond value (3000 = 3 seconds). This value should be at least double the amount of the fadeDuration value. **Default is 6000 (6 seconds)**.
- randomize - ```boolean``` - Controls whether the order of the quotes array should be randomized. **Default is false**.


## Usage
HTML
```html
<ngx-quote-looper 
           [inputQuotes]="quoteData" 
           [authorCSS]="{'text-align': 'right'}" 
           [quoteCSS]="{'text-align': 'justify', 'font-size': 'var(--font-body)'}"
           [looperCSS]="{'padding': '2rem'}"
           [fadeDuration]="4000"
           [loopDuration]="10000"
           [randomize]="true"
                >
</ngx-quote-looper>
```

TypeScript
```typescript
import { NgxQuoteLooperComponent } from 'ngx-quote-looper';

// If Standalone:
imports: [ NgxQuoteLooperComponent ],
```


## Styling

You can make use of the ```authorCSS```, ```looperCSS```, and ```quoteCSS``` properties to style the elements using the ```ngStyle``` directive.

**OR** you can add the styles directly to the apps root styles file:

```css
.ngx-author {
    text-align: right;
} 

.ngx-quote {
    text-align: justify;
    font-size: var(--font-body);
}

.ngx-looper {
    padding: 2rem;
}
```

## Quote array example

The inputQuotes property has a type of ```any[]```. It should be made up of a quote and author to achieve the intended effect for this package.

```typescript
quoteData = [
    {quote: `Work hard in silence, let your success be your noise.`},
    {quote: `It's no use going back to yesterday, because I was a different person then.`, author: `Lewis Carroll`},
    {quote: `Experience is one thing you can't get for nothing.`, author: `Oscar Wilde`},
    {quote: `If you take too long to decide what to do with your life, you'll find you've done it.` },
    {quote: `The grass is greener where you water it.`, author: `Neil Barringham`},
    {quote: `Show me a person who never made a mistake, and I will show you a person who never did anything.`, author: `William Rosenberg`},
    {quote: `Seek inspiration for it's a state of mind that can make a man divine.`, author: `Vishal Kapoor`},
    {quote: `Always go too far, because that's where you'll find the truth.`, author: `Albert Camus`},
]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)