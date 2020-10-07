var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./home/home.module#HomePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"scene/:id","loadChildren":"./scene/scene.module#ScenePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/scene/scene-routing.module.ts","module":"ScenePageRoutingModule","children":[{"path":"","component":"ScenePage"}],"kind":"module"}],"module":"ScenePageModule"}]},{"path":"leaderboard","loadChildren":"./leaderboard/leaderboard.module#LeaderboardPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/leaderboard/leaderboard-routing.module.ts","module":"LeaderboardPageRoutingModule","children":[{"path":"","component":"LeaderboardPage"}],"kind":"module"}],"module":"LeaderboardPageModule"}]},{"path":"history-modal","loadChildren":"./history-modal/history-modal.module#HistoryModalPageModule"}],"kind":"module"},{"name":"routes","filename":"src/app/history-modal/history-modal-routing.module.ts","module":"HistoryModalPageRoutingModule","children":[{"path":"","component":"HistoryModalPage"}],"kind":"module"},{"name":"routes","filename":"src/app/object-inventory-modal/object-inventory-modal-routing.module.ts","module":"ObjectInventoryModalPageRoutingModule","children":[{"path":"","component":"ObjectInventoryModalPage"}],"kind":"module"},{"name":"routes","filename":"src/app/win-loose-modal/win-loose-modal-routing.module.ts","module":"WinLooseModalPageRoutingModule","children":[{"path":"","component":"WinLooseModalPage"}],"kind":"module"}]}
