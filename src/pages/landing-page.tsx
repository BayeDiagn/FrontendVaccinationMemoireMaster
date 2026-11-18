import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Calendar,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Activity,
  MapPin,
  Clock,
  Star,
  Baby,
  Syringe,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { AppLogo } from "@/utils/common";

export default function LandingPage() {
  const features = [
    {
      icon: Baby,
      title: "Suivi des Enfants",
      description: "Carnet de santé numérique pour chaque enfant avec son calendrier vaccinal complet et les rappels automatiques.",
      color: "text-rose-500",
      bg: "bg-rose-50 dark:bg-rose-950/30"
    },
    {
      icon: Calendar,
      title: "Gestion des Rendez-vous",
      description: "Planification intelligente des séances de vaccination, gestion des créneaux et suivi des présences.",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: Syringe,
      title: "Catalogue des Vaccins",
      description: "Gestion du stock vaccinal, suivi des dates d'expiration et alertes de rupture de stock.",
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      icon: BarChart3,
      title: "Statistiques & Rapports",
      description: "Tableaux de bord interactifs, taux de couverture vaccinale et rapports par district sanitaire.",
      color: "text-violet-500",
      bg: "bg-violet-50 dark:bg-violet-950/30"
    },
    {
      icon: Users,
      title: "Gestion Multi-rôles",
      description: "Médecins, infirmiers, ICP et sages-femmes : chaque professionnel accède à son espace dédié.",
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-950/30"
    },
    {
      icon: FileText,
      title: "Prédiction par IA",
      description: "Assistance intelligente pour la prédiction des risques et le choix des vaccins recommandés.",
      color: "text-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-950/30"
    }
  ];

  const stats = [
    { number: "10 000+", label: "Enfants suivis", icon: Baby },
    { number: "50+",     label: "Postes de santé", icon: MapPin },
    { number: "99.9%",   label: "Disponibilité", icon: Activity },
    { number: "24/7",    label: "Accès plateforme", icon: Clock }
  ];

  const pilliers = [
    { icon: "🛡️", title: "Protéger nos enfants", desc: "Un suivi vaccinal rigoureux pour chaque enfant dès la naissance" },
    { icon: "💉", title: "Prévenir les maladies", desc: "Réduire la mortalité infantile grâce à une vaccination complète et à temps" },
    { icon: "🌍", title: "Construire un avenir sain", desc: "Un Sénégal en bonne santé, district sanitaire par district sanitaire" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden">

      {/* ─────────────────── HEADER ─────────────────── */}
      <header className="sticky top-0 z-50 w-full">
        {/* Gradient accent bar */}
        <div className="h-[3px] bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 dark:from-blue-800 dark:via-blue-500 dark:to-blue-800" />

        <div className="border-b border-blue-100 dark:border-slate-800 bg-white/96 dark:bg-slate-950/96 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/25 rounded-xl blur-md" />
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/35">
                  <AppLogo className="h-6 w-6 sm:h-7 sm:w-7 brightness-0 invert" />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-none">VacciMed</h1>
                <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">Plateforme de Vaccination</p>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { href: "#features", label: "Fonctionnalités" },
                { href: "#about",    label: "À propos" },
                { href: "#contact",  label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ModeToggle />
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex border-blue-200 dark:border-blue-800 text-primary hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300"
                asChild
              >
                <Link to="/login">Se connecter</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-xs sm:text-sm shadow-md shadow-blue-500/30 border-0"
                asChild
              >
                <Link to="/login">
                  <span className="hidden sm:inline">Commencer</span>
                  <span className="sm:hidden">Connexion</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '92vh' }}>
        {/* Photo plein écran en fond */}
        <img
          src="/hero-vaccination.png"
          alt="Séance de vaccination dans un poste de santé au Sénégal"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay sombre dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/60 to-blue-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

        {/* Contenu centré sur la gauche */}
        <div className="relative h-full container mx-auto px-4 lg:px-6 flex items-center" style={{ minHeight: '92vh' }}>
          <div className="max-w-2xl space-y-6 sm:space-y-8 py-20">

            <Badge className="w-fit bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
              <Stethoscope className="mr-2 h-3 w-3" />
              <span className="text-xs sm:text-sm">Plateforme Médicale — Sénégal</span>
            </Badge>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
                Vaccinons aujourd'hui…
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-200 leading-tight mt-2 drop-shadow">
                pour un Sénégal en bonne santé
              </h2>
            </div>

            <p className="text-base sm:text-lg text-blue-100 max-w-lg leading-relaxed">
              VacciMed digitalise la gestion de la vaccination dans les postes de santé sénégalais.
              Suivi des enfants, carnets vaccinaux, rendez-vous, stocks et rapports — tout en un.
            </p>

            {/* Trois piliers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pilliers.map((p, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <p className="text-white font-bold text-sm leading-tight">{p.title}</p>
                  <p className="text-blue-200 text-xs mt-1 leading-snug hidden sm:block">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 shadow-xl w-full sm:w-auto text-base" asChild>
                <Link to="/login">
                  Accéder à la plateforme <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/20">
              {stats.map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <stat.icon className="h-5 w-5 text-blue-200 mx-auto" />
                  <div className="text-xl sm:text-2xl font-black text-white">{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 72L60 64C120 56 240 40 360 36C480 32 600 40 720 46C840 52 960 56 1080 52C1200 48 1320 36 1380 30L1440 24V72H0Z" fill="white" className="dark:fill-slate-950"/>
          </svg>
        </div>
      </section>

      {/* ─────────────────── FEATURES ─────────────────── */}
      <section id="features" className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary bg-primary/5">
            <Star className="mr-2 h-3 w-3" />
            Fonctionnalités Avancées
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground px-2 sm:px-0">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Une suite complète d'outils professionnels pour optimiser votre gestion vaccinale
            et améliorer la prise en charge de vos patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/60 hover:border-primary/30 overflow-hidden cursor-default">
              <CardHeader className="p-5 sm:p-6 pb-3">
                <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 mx-4 sm:mx-6 lg:mx-10 rounded-2xl sm:rounded-3xl my-4 sm:my-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative container mx-auto px-6 py-14 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2 sm:px-0">
              Rejoignez les postes de santé
              <span className="block text-blue-200">qui font confiance à VacciMed</span>
            </h2>
            <p className="text-base sm:text-lg text-blue-100 px-2 sm:px-0">
              Digitalisez votre poste de santé, protégez chaque enfant et contribuez à un Sénégal en bonne santé.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base sm:text-lg px-8 shadow-lg shadow-blue-900/30" asChild>
              <Link to="/login">
                Commencer maintenant <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-blue-200">
              {["Adapté au PEV Sénégal", "Multi-rôles (ICP, Infirmier, SF)", "Données 100% sécurisées"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-300" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── ABOUT ─────────────────── */}
      <section id="about" className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary bg-primary/5">
              <Stethoscope className="mr-2 h-3 w-3" />
              À propos de nous
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground px-2 sm:px-0">
              Notre mission pour la santé publique
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Nous développons des solutions technologiques innovantes pour améliorer
              la gestion vaccinale et optimiser la protection de la santé publique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Conçu pour le système de santé sénégalais</h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  VacciMed a été développé en réponse aux défis concrets des postes de santé
                  au Sénégal : carnets papier perdus, difficultés de suivi, ruptures de stock
                  et manque de visibilité sur la couverture vaccinale.
                </p>
                <p>
                  La plateforme s'adresse aux médecins, infirmiers chefs de poste (ICP),
                  infirmiers et sages-femmes qui travaillent quotidiennement à la vaccination
                  des nourrissons et des enfants.
                </p>
                <p>
                  Notre objectif : zéro enfant oublié, chaque vaccin administré au bon moment,
                  dans les meilleures conditions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="text-center bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">PEV</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Programme Élargi de Vaccination</div>
                </div>
                <div className="text-center bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Données sécurisées</div>
                </div>
              </div>
            </div>

            <Card className="border border-primary/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-primary to-blue-700 p-5 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-white">
                  <Shield className="h-5 w-5 text-blue-200" />
                  Ce que VacciMed offre
                </CardTitle>
              </div>
              <CardContent className="space-y-5 p-5 sm:p-6">
                {[
                  { title: "Carnet vaccinal numérique", desc: "Chaque enfant dispose d'un dossier complet et accessible" },
                  { title: "Alertes & rappels automatiques", desc: "Ne manquez plus aucun rendez-vous vaccinal" },
                  { title: "Rapports par district sanitaire", desc: "Suivi de la couverture vaccinale en temps réel" },
                  { title: "Prédiction par intelligence artificielle", desc: "Aide à la décision pour le choix des vaccins recommandés" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTACT ─────────────────── */}
      <section id="contact" className="bg-slate-50 dark:bg-slate-900/50 border-y border-border/50 py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
              <Badge variant="outline" className="w-fit mx-auto border-primary/30 text-primary bg-primary/5">
                <Activity className="mr-2 h-3 w-3" />
                Nous contacter
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground px-2 sm:px-0">
                Parlons de votre projet
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
                Notre équipe est à votre disposition pour vous accompagner dans la mise en place
                de votre solution de gestion vaccinale.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5">Informations de contact</h3>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, title: "Adresse", desc: "123 Avenue de la Santé, 75000 Paris" },
                      { icon: Clock, title: "Horaires", desc: "Lun-Ven: 8h-18h | Support 24/7" },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm sm:text-base">{title}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5">Équipes spécialisées</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Heart, bg: "bg-rose-50 dark:bg-rose-950/30", color: "text-rose-500", title: "Support Médical", email: "support@vaccimed.fr" },
                      { icon: Shield, bg: "bg-emerald-50 dark:bg-emerald-950/30", color: "text-emerald-500", title: "Sécurité & Conformité", email: "security@vaccimed.fr" },
                    ].map(({ icon: Icon, bg, color, title, email }) => (
                      <Card key={title} className="p-4 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-5 w-5 ${color}`} />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm sm:text-base">{title}</div>
                            <div className="text-xs sm:text-sm text-primary">{email}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="shadow-lg border-border/60 bg-white dark:bg-slate-900">
                <CardHeader className="p-5 sm:p-6 pb-4">
                  <CardTitle className="text-lg sm:text-xl">Demander une démonstration</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Remplissez ce formulaire et notre équipe vous contactera rapidement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Prénom", "Nom"].map((label) => (
                        <div key={label}>
                          <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            placeholder={`Votre ${label.toLowerCase()}`}
                          />
                        </div>
                      ))}
                    </div>
                    {[
                      { label: "Email professionnel", type: "email", placeholder: "votre.email@hopital.fr" },
                      { label: "Établissement", type: "text", placeholder: "Nom de votre établissement" },
                    ].map(({ label, type, placeholder }) => (
                      <div key={label}>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
                        <input
                          type={type}
                          className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-foreground resize-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Décrivez vos besoins..."
                      />
                    </div>
                    <Button className="w-full text-white bg-primary hover:bg-primary/90 shadow-sm shadow-primary/30" size="lg">
                      Envoyer la demande <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <AppLogo className="h-5 w-5 brightness-0 invert" />
              </div>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">VacciMed</div>
                <div className="text-xs sm:text-sm text-slate-400">Vaccination Médicalisée — Sénégal © 2025</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
              {["#about|À propos", "#contact|Contact", "#|Confidentialité", "#|Conditions", "#|Support"].map((item) => {
                const [href, label] = item.split("|");
                return <a key={label} href={href} className="hover:text-white transition-colors">{label}</a>;
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
