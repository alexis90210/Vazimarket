<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class PaiementModeController extends AbstractController
{
    #[Route('/paiement-modes', name: 'app_paiement_mode')]
    public function index(): Response
    {
        return $this->render('paiement_mode/index.html.twig', [
            'controller_name' => 'PaiementModeController',
        ]);
    }
}
