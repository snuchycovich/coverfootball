<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiSecurityController extends AbstractController
{
    /**
     * @Route("/api/security/login", name="api_login")
     * @return JsonResponse
     */
    public function login(): JsonResponse
    {
        $user = $this->getUser();
        $response = new JsonResponse($user->getRoles());
        return $response;
    }

    public function logout(): void
    {
        throw  new \RuntimeException('This should not be reached!');
    }
}
