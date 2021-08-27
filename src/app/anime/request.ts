import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type send<R> = {
  count: number;
  list: R[];
};

export async function getData<T>(
  http: HttpClient,
  path: string,
  params?: HttpParams
): Promise<send<T>> {
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MCIsIm5iZiI6MTYzMDAwMTIyOSwiZXhwIjoxNjMyNTkzMjI5LCJpYXQiOjE2MzAwMDEyMjl9.2IlU82X8kgoBulXXOKszDJYirRQgxzlCoo5yxNbAWRY')
  const headers = new HttpHeaders()
  .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
  const data = await http
    .get<any>(`https://api.aniapi.com/v1/${path}`, {
      params: params,
      headers: headers
    })
    .pipe(
      map((data) => ({
        count: data.data?.count,
        list: <T[]>data.data?.documents,
      }))
    )
    .toPromise();
  return data;
}

export function getGeneros(http: HttpClient): Observable<string[]> {
  return http
    .get<any>('https://api.aniapi.com/v1/resources/1.0/0')
    .pipe(map((x) => x.data.genres));
}
