import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {

    next: value => console.log('Siguiente [Next]', value),
    error: error => console.warn('Error [obj]', error),
    complete: () => console.info('Complete [obj]')

};

const obs$ = new Observable<String>( subcriber => {

    subcriber.next('Hola');
    subcriber.next('mundo');

    // const a = undefined;
    // a.name = 'Garry'

    subcriber.complete();


});


// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error:', error),
//     ()=> console.log('Completado')
    
// );


obs$.subscribe(observer)
