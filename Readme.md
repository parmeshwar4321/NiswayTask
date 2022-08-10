# nisway Task

### how to get started

```
git clone  <Repo URL>
```

install packages with below command

```
yarn  install --save
```

Run your project

```
yarn start
```

### endpoints

* fetch all records

```
api/salary/
```
***options***
> filter
```
<domain>/api/salary/?<fieldName>=<value>

```
example:
```
<domain>/api/salary/?industry=Government
```
> sort
```
<domain>/api/salary/?sort=<fieldName>

```
example:
```
<domain>/api/salary/?sort=industry
```
---
* fetch single record
```
api/salary/:id
```
example:
```
<domain>/api/salary/62f33d3585bf835b88a8955a
```


checkout on live URL

[https://nisway.herokuapp.com/](https://nisway.herokuapp.com/)