import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Renderer2, input } from '@angular/core';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'ngx-quote-looper',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './ngx-quote-looper.component.html',
  styleUrl: './ngx-quote-looper.component.scss'
})
export class NgxQuoteLooperComponent implements OnInit {
    @Input() inputQuotes: any[];
    @Input() authorCSS: { [key: string]: string };
    @Input() quoteCSS: { [key: string]: string };
    @Input() looperCSS: { [key: string]: string };
    @Input() fadeDuration: number = 3000;
    @Input() loopDuration: number = 6000;
    @Input() randomize: boolean = false;

    quoteSubscription: Subscription;
    private _onDestroy = new Subject<void>();

    public quotes: Quote[];
    quotesLength: number;
    currentQuote: string;
    currentAuthor?: string;
    quoteChanged: boolean;
    timeoutDuration: number;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {

        if (this.inputQuotes && this.inputQuotes.length > 0) {
            this.setFadeDurationOnCssClasses(this.fadeDuration);
            this.timeoutDuration = this.loopDuration - this.fadeDuration;
            this.quotes = this.inputQuotes.map(quote => new Quote(quote.quote, quote.author));
            
            if (this.randomize) {
                this.quotes = this.randomizeQuotes(this.quotes);
            }

            this.quotesLength = 0;
            this.currentQuote = this.quotes[0].quote;
            this.currentAuthor = this.quotes[0].author;

            setTimeout(() => {
                this.quoteChanged = true;
            }, this.timeoutDuration);

            this.quoteSubscription = interval(this.loopDuration).pipe(takeUntil(this._onDestroy)).subscribe((x => {
                this.quotesLength++;
                if (this.quotesLength === this.quotes.length){
                    this.quotesLength = 0;
                }
                this.nextQuote();
            }));
        }

    }

    setFadeDurationOnCssClasses(duration: number) {
        duration = Math.round(duration / 1000);
        this.renderer.setStyle(document.documentElement, '--fade-duration', `${duration}s`);
    }

    nextQuote() : void {
        setTimeout(() => {
            this.quoteChanged = true;
        }, this.timeoutDuration);

        this.currentQuote = this.quotes[this.quotesLength].quote;
        this.currentAuthor = this.quotes[this.quotesLength].author;

        this.quoteChanged = false;
    }

    private randomizeQuotes(quoteData: any[]): any[] {
        for (let i = quoteData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quoteData[i], quoteData[j]] = [quoteData[j], quoteData[i]];
        }

        return quoteData;
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

}
export class Quote {
    quote: string;
    author?: string;

    constructor(quote: string, author?: string) {
        this.quote = quote;
        this.author = author;
    }
}
