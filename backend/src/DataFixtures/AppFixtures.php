<?php

namespace App\DataFixtures;

use App\Entity\Team;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $team = new Team();
        $team->setName('Conquérants');
        $team->setLocation('Caen');
        $team->setSlug('conquerants-caen');
        $manager->persist($team);
        $manager->flush();
    }
}
