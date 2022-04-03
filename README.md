# Introduce

Epxress.TS Backend Server 탬플릿으로, _2022년 4월 3일_ 에 작성되었습니다.

## Sturcture

```
Singleton Application
├ user/
│ ├ user.routes.ts
│ ├ user.service.ts
│ ├ user.model.ts
├ post/
│ ├ post.routes.ts
│ ├ post.service.ts
│ ├ post.model.ts
├ package-lock.json
├ package.json
├ README.md
└ tsconfig.json
```

## Design Pattern

1. Singleton Pattern
2. Service Pattern
3. Repository Pattern (un-used)

### References

1. PostgreSQL 연결 : https://jojoldu.tistory.com/634
2. pg connection docs : https://node-postgres.com/features/connecting
3. mongoose docs : https://mongoosejs.com/docs/api.html