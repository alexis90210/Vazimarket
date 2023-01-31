<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class ProduitNewController extends AbstractController
{
    #[Route('/produit-new', name: 'app_produit_new')]
    public function index(): Response
    {
        return $this->render('produit_new/index.html.twig', [
            'controller_name' => 'ProduitNewController',
        ]);
    }
}
