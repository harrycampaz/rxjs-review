import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {

    next: value => console.log('Next:', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.info('Completed:')

};

const intervalo$ = new Observable<number>(subs => {

    const intervalId = setInterval(() => subs.next(Math.random()), 1000);

    return () => { 
        clearInterval(intervalId)
        console.log("Intervalo termiando: ");
        
    }



})

// Casteo multiple , Observer

const subject$ = new Subject();

const subcription =  intervalo$.subscribe( subject$ );

// const sub1 = intervalo$.subscribe(rnd => console.log("Subsc1: ", rnd));
// const sub2 = intervalo$.subscribe(rnd => console.log("Subsc2: ", rnd));

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10);
    subject$.complete();
    subcription.unsubscribe();

}, 2500)