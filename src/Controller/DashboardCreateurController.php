<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardCreateurController extends AbstractController
{
    #[Route('/dashboard/createur', name: 'app_dashboard_createur')]
    public function index(): Response
    {
        return $this->render('dashboard_createur/index.html.twig', [
            'controller_name' => 'DashboardCreateurController',
        ]);
    }
}
