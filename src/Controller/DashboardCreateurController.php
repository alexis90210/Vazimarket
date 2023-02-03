<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardCreateurController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardCreateurController',
        ]);
    }

    #[Route('/dashboard-produit-new', name: 'app_produit_new')]
    public function produit_new(): Response
    {
        return $this->render('dashboard/produit_new/index.html.twig', [
            'controller_name' => 'ProduitNewController',
        ]);
    }

    #[Route('/dashboard-attributs', name: 'app_attributs')]
    public function attributs(): Response
    {
        return $this->render('dashboard/attributs/index.html.twig', [
            'controller_name' => 'AttributsController',
        ]);
    }

    #[Route('/dashboard-categories', name: 'app_categorie')]
    public function categories(): Response
    {
        return $this->render('dashboard/categorie/index.html.twig', [
            'controller_name' => 'CategorieController',
        ]);
    }

    #[Route('/dashboard-clients', name: 'app_clients')]
    public function clients(): Response
    {
        return $this->render('dashboard/clients/index.html.twig', [
            'controller_name' => 'ClientsController',
        ]);
    }

    #[Route('/dashboard-commandes', name: 'app_commandes')]
    public function commandes(): Response
    {
        return $this->render('dashboard/commandes/index.html.twig', [
            'controller_name' => 'CommandesController',
        ]);
    }

    #[Route('/dashboard-createurs', name: 'app_createurs')]
    public function createurs(): Response
    {
        return $this->render('dashboard/createurs/index.html.twig', [
            'controller_name' => 'CreateursController',
        ]);
    }

    #[Route('/dashboard-etiquettes', name: 'app_etiquettes')]
    public function etiquettes(): Response
    {
        return $this->render('dashboard/etiquettes/index.html.twig', [
            'controller_name' => 'EtiquettesController',
        ]);
    }

    #[Route('/dashboard-produits', name: 'app_liste_produit')]
    public function produits(): Response
    {
        return $this->render('dashboard/liste_produit/index.html.twig', [
            'controller_name' => 'ListeProduitController',
        ]);
    }
    #[Route('/dashboard-messagerie', name: 'app_messagerie')]
    public function messagerie(): Response
    {
        return $this->render('dashboard/messagerie/index.html.twig', [
            'controller_name' => 'MessagerieController',
        ]);
    }

    #[Route('/dashboard-paiement-modes', name: 'app_paiement_mode')]
    public function paiement_modes(): Response
    {
        return $this->render('dashboard/paiement_mode/index.html.twig', [
            'controller_name' => 'PaiementModeController',
        ]);
    }

    #[Route('/dashboard-vendeurs', name: 'app_vendeurs')]
    public function vendeurs(): Response
    {
        return $this->render('dashboard/vendeurs/index.html.twig', [
            'controller_name' => 'VendeursController',
        ]);
    }

}
