'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dhareshsawLescargot documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' : 'data-target="#xs-components-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' :
                                            'id="xs-components-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' : 'data-target="#xs-injectables-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' :
                                        'id="xs-injectables-links-module-AppModule-d91b4e99a71dc9dc71af2002d1820560"' }>
                                        <li class="link">
                                            <a href="injectables/CharacterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CharacterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SauvegardeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SauvegardeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SceneService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SceneService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModalPageModule.html" data-type="entity-link">HistoryModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HistoryModalPageModule-f8cb9c30ff4447c951715fa540065d2f"' : 'data-target="#xs-components-links-module-HistoryModalPageModule-f8cb9c30ff4447c951715fa540065d2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoryModalPageModule-f8cb9c30ff4447c951715fa540065d2f"' :
                                            'id="xs-components-links-module-HistoryModalPageModule-f8cb9c30ff4447c951715fa540065d2f"' }>
                                            <li class="link">
                                                <a href="components/HistoryModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoryModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModalPageRoutingModule.html" data-type="entity-link">HistoryModalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' : 'data-target="#xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' :
                                            'id="xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderboardPageModule.html" data-type="entity-link">LeaderboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderboardPageModule-4d673930274c72174b1424f3eb35a4fd"' : 'data-target="#xs-components-links-module-LeaderboardPageModule-4d673930274c72174b1424f3eb35a4fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderboardPageModule-4d673930274c72174b1424f3eb35a4fd"' :
                                            'id="xs-components-links-module-LeaderboardPageModule-4d673930274c72174b1424f3eb35a4fd"' }>
                                            <li class="link">
                                                <a href="components/LeaderboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderboardPageRoutingModule.html" data-type="entity-link">LeaderboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalLanguagesPageModule.html" data-type="entity-link">ModalLanguagesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalLanguagesPageModule-293b13d646fd1943e20649cab86584a4"' : 'data-target="#xs-components-links-module-ModalLanguagesPageModule-293b13d646fd1943e20649cab86584a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalLanguagesPageModule-293b13d646fd1943e20649cab86584a4"' :
                                            'id="xs-components-links-module-ModalLanguagesPageModule-293b13d646fd1943e20649cab86584a4"' }>
                                            <li class="link">
                                                <a href="components/ModalLanguagesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalLanguagesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalLanguagesPageRoutingModule.html" data-type="entity-link">ModalLanguagesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectInventoryModalPageModule.html" data-type="entity-link">ObjectInventoryModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ObjectInventoryModalPageModule-bd67a688497033dddc9c17596d80c067"' : 'data-target="#xs-components-links-module-ObjectInventoryModalPageModule-bd67a688497033dddc9c17596d80c067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObjectInventoryModalPageModule-bd67a688497033dddc9c17596d80c067"' :
                                            'id="xs-components-links-module-ObjectInventoryModalPageModule-bd67a688497033dddc9c17596d80c067"' }>
                                            <li class="link">
                                                <a href="components/ObjectInventoryModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjectInventoryModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectInventoryModalPageRoutingModule.html" data-type="entity-link">ObjectInventoryModalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScenePageModule.html" data-type="entity-link">ScenePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScenePageModule-4ea99ec816c4375f006144cb45f84ec6"' : 'data-target="#xs-components-links-module-ScenePageModule-4ea99ec816c4375f006144cb45f84ec6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScenePageModule-4ea99ec816c4375f006144cb45f84ec6"' :
                                            'id="xs-components-links-module-ScenePageModule-4ea99ec816c4375f006144cb45f84ec6"' }>
                                            <li class="link">
                                                <a href="components/ScenePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScenePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScenePageRoutingModule.html" data-type="entity-link">ScenePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WinLooseModalPageModule.html" data-type="entity-link">WinLooseModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WinLooseModalPageModule-ec782c9b9371383a35f61f0a1add613e"' : 'data-target="#xs-components-links-module-WinLooseModalPageModule-ec782c9b9371383a35f61f0a1add613e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WinLooseModalPageModule-ec782c9b9371383a35f61f0a1add613e"' :
                                            'id="xs-components-links-module-WinLooseModalPageModule-ec782c9b9371383a35f61f0a1add613e"' }>
                                            <li class="link">
                                                <a href="components/WinLooseModalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinLooseModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WinLooseModalPageRoutingModule.html" data-type="entity-link">WinLooseModalPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Character.html" data-type="entity-link">Character</a>
                            </li>
                            <li class="link">
                                <a href="classes/Hero.html" data-type="entity-link">Hero</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectInventory.html" data-type="entity-link">ObjectInventory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Scene.html" data-type="entity-link">Scene</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AudioService.html" data-type="entity-link">AudioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CharacterService.html" data-type="entity-link">CharacterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link">LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SauvegardeService.html" data-type="entity-link">SauvegardeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SceneService.html" data-type="entity-link">SceneService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});