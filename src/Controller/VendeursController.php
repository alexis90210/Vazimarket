<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class VendeursController extends AbstractController
{
    #[Route('/vendeurs', name: 'app_vendeurs')]
    public function index(): Response
    {
        return $this->render('vendeurs/index.html.twig', [
            'controller_name' => 'VendeursController',
        ]);
    }
}
