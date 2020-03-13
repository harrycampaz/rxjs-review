import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {

    next: value => console.log('Next:', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.info('Completed:')

};

const intervalo$ = new Observable<number>(subsc => {

   let count = 0
    const interval = setInterval(()=> {

        count ++;
        subsc.next(count)
        console.log(count);
        

    }, 2000)
    

    return ()=> {
        clearInterval(interval)
        console.log('Intervalo terminado');
        
    }
})


const subcrip = intervalo$.subscribe(observer)
const subcrip2 = intervalo$.subscribe(observer)
const subcrip3 = intervalo$.subscribe(observer)

subcrip.add(subcrip2)
        .add(subcrip3)

setTimeout(() => {

    // subcrip.unsubscribe()
    // subcrip2.unsubscribe()
    // subcrip3.unsubscribe()

    subcrip.unsubscribe()
    console.log('Terminado');
    

})